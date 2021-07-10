import { UploadedDesktop } from './UploadedDesktop';
import { UploadedMobile } from './UploadedMobile';
import { useResponsive } from 'utils/responsive';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useHistory } from 'react-router-dom';
import { ERROR_MESSAGE, SHARER_MESSAGE } from 'app/helpers/constants';
import { UploadedTypes } from 'types';
import { storage } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { base64toBlob } from 'app/helpers';
import {
  fetchError,
  fetchStart,
  fetchSuccess,
  setImageId
} from 'redux/actions';
import { ArtworkService } from 'app/services';
import { useAlert } from 'react-alert';
import { ShareECardPopup, ThankyouPopup } from './Popups';
import isEmpty from 'ramda.isempty';

export const UploadedPage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const { id, message } = useSelector<AppState, AppState['artwork']>(
    ({ artwork }) => artwork
  );

  const [openShare, setOpenShare] = useState(false);
  const [openThankyou, setOpenThankyou] = useState(false);
  const alert = useAlert();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stage.name) {
      history.push('/artwork/format');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = () => {
    try {
      const image = document.getElementById(
        'finalImageContainer'
      )?.firstElementChild;
      const a = document.createElement('a');
      a.href = image?.getAttribute('src') || '';
      a.download = 'Macallan_CYO_artwork.png';
      a.click();
    } catch ({ message = ERROR_MESSAGE }) {
      dispatch(fetchError(message));
    }
  };

  const getImageLink = () => {
    const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
    const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/images%2F`;
    const imageName = `${id}.png`;
    return encodeURIComponent(
      firebaseStorage + bucket + imageName + '?alt=media'
    );
  };
  const handleShareSocial = mediaUrl => {
    const totalUrl = mediaUrl + getImageLink();

    window.open(
      totalUrl,
      '',
      'width=500, height=500, scrollbars=yes, resizable=no'
    );
  };

  const handleShareWhatsapp = () => {
    const a = document.createElement('a');
    const totalUrl = 'whatsapp://send?text=' + getImageLink();
    a.href = totalUrl;
    a.target = '_blank';
    a.setAttribute('data-action', 'share/whatsapp/share');
    a.click();
  };

  const handleClick = key => {
    switch (key) {
      case UploadedTypes.DownloadIcon:
        handleDownload();
        break;
      case UploadedTypes.FacebookIcon:
        handleShareSocial(
          `http://www.facebook.com/sharer.php?title=${SHARER_MESSAGE}&u=`
        );
        break;
      case UploadedTypes.TwitterIcon:
        handleShareSocial(
          `http://twitter.com/share?text=${SHARER_MESSAGE}&url=`
        );
        break;
      case UploadedTypes.WhatsappIcon:
        handleShareWhatsapp();
        break;
      default:
        break;
    }
  };

  const uploadToStorage = async (contact = {}) => {
    if (id) {
      alert.error(
        'This artwork is already uploaded, please wait for admin’s approval'
      );
      return;
    }
    try {
      dispatch(fetchStart());

      const id = uuidv4();
      const dataUrl = stage.toDataURL();
      const fileName = `${id}.png`;
      const blob = base64toBlob(dataUrl, fileName);
      const ref = storage.ref('images').child(fileName);
      await ref.put(blob);

      const data = {
        imgUrl: `images/${fileName}`,
        message,
        status: 'in_review',
        contact
      };

      const artworkService = new ArtworkService();
      await artworkService.createArtwork(data);

      dispatch(setImageId(id));
      dispatch(fetchSuccess());
      if (isEmpty(contact)) {
        alert.success(
          'Successfully submitted! Please wait for admin’s approval.'
        );
      } else {
        setOpenShare(false);
        setOpenThankyou(true);
      }
    } catch (e) {
      const { message = ERROR_MESSAGE } = e;
      dispatch(fetchError(message));
    }
  };

  const redirectToGallery = () => {
    history.push('/gallery');
  };

  const closeShareECardPopup = () => {
    setOpenShare(false);
  };

  const closeThankyouPopup = () => {
    setOpenThankyou(false);
  };

  useEffect(() => {
    setOpenShare(true);
  }, []);

  const Component = isMobile ? UploadedMobile : UploadedDesktop;

  return (
    <>
      <ShareECardPopup
        isOpen={openShare}
        onClose={closeShareECardPopup}
        submitHandler={uploadToStorage}
      />
      <ThankyouPopup isOpen={openThankyou} onClose={closeThankyouPopup} />
      <Component
        handleClick={handleClick}
        handlePostGallery={uploadToStorage}
        handleViewGallery={redirectToGallery}
        handleShareECard={handleDownload}
      />
    </>
  );
};
