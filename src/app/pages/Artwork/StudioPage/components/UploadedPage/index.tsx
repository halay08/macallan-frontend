import { UploadedDesktop } from './UploadedDesktop';
import { UploadedMobile } from './UploadedMobile';
import { useResponsive } from 'utils/responsive';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useHistory } from 'react-router-dom';
import { ERROR_MESSAGE, SHARER_MESSAGE } from 'app/helpers/constants';
import { ArtworkContact, UploadedTypes } from 'types';
import { storage } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { base64toBlob } from 'app/helpers';
import {
  fetchError,
  fetchStart,
  fetchSuccess,
  setContact,
  setImageId
} from 'redux/actions';
import { ArtworkService } from 'app/services';
import { useAlert } from 'react-alert';
import { ShareECardPopup, ThankyouPopup } from './Popups';
import Konva from 'konva';

const isChromeOnIOS = () => navigator.userAgent.match('CriOS');

export const UploadedPage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const { id, message, contact } = useSelector<AppState, AppState['artwork']>(
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

  const uploadImage = async (fileName: string) => {
    const dataUrl = stage.toDataURL({ pixelRatio: 3 });
    const blob = base64toBlob(dataUrl, fileName);
    const ref = storage.ref('images').child(fileName);
    await ref.put(blob);
  };

  const getImageLink = (name?: string) => {
    const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
    const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/images%2F`;
    const imageName = name || `${id}.png`;
    return encodeURIComponent(
      firebaseStorage + bucket + imageName + '?alt=media'
    );
  };

  const normalDownload = () => {
    const a = document.createElement('a');
    const dataURL = stage.toDataURL({ pixelRatio: 3 });
    a.href = dataURL;
    a.download = 'Macallan_CYO_artwork.png';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const chromeOnIOSDownload = async () => {
    const temp = 'temp.png';
    await uploadImage(temp);
    const imageUrl =
      decodeURIComponent(getImageLink(temp)) + '&t=' + Date.now();
    window.open(imageUrl, '_blank');
  };

  const handleDownload = async () => {
    try {
      dispatch(fetchStart());
      if (isChromeOnIOS()) {
        await chromeOnIOSDownload();
      } else {
        normalDownload();
      }
      dispatch(fetchSuccess());
    } catch ({ message = ERROR_MESSAGE }) {
      dispatch(fetchError(message));
    }
  };

  const uploadToStorage = async (): Promise<string> => {
    try {
      dispatch(fetchStart());
      const newId = uuidv4();
      const fileName = `${newId}.png`;
      dispatch(setImageId(newId));
      await uploadImage(fileName);

      dispatch(fetchSuccess());
      return fileName;
    } catch (e) {
      const { message = ERROR_MESSAGE } = e;
      dispatch(fetchError(message));
      return '';
    }
  };

  const handleShareSocial = async (mediaUrl: string) => {
    let fileName = `${id}.png`;
    if (!id) fileName = await uploadToStorage();
    const totalUrl = mediaUrl + getImageLink(fileName);

    window.open(
      totalUrl,
      '',
      'width=500, height=500, scrollbars=yes, resizable=no'
    );
  };

  const handleShareWhatsapp = async () => {
    let fileName = `${id}.png`;
    if (!id) fileName = await uploadToStorage();
    const totalUrl = 'whatsapp://send?text=' + getImageLink(fileName);
    const a = document.createElement('a');
    a.href = totalUrl;
    a.target = '_blank';
    a.setAttribute('data-action', 'share/whatsapp/share');
    a.click();
  };

  const handleSubmitEmail = async () => {
    let fileName = `${id}.png`;
    if (!id) fileName = await uploadToStorage();
    const imageLink = getImageLink(fileName);
    const a = document.createElement('a');
    a.href = `mailto:?subject=${SHARER_MESSAGE}&body=${imageLink}`;
    a.target = '_blank';
    a.title = 'Share by Email';
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

  const postToGallery = async (contactInfo: ArtworkContact) => {
    if (contact) {
      alert.error(
        'This artwork is already uploaded, please wait for admin’s approval'
      );
      return;
    }
    try {
      dispatch(fetchStart());

      const id = uuidv4();
      const dataUrl = stage.toDataURL({ pixelRatio: 3 });
      const fileName = `${id}.png`;
      const blob = base64toBlob(dataUrl, fileName);
      const ref = storage.ref('images').child(fileName);
      await ref.put(blob);

      const data = {
        imgUrl: `images/${fileName}`,
        message,
        status: 'in_review',
        contact: contactInfo
      };

      const artworkService = new ArtworkService();
      await artworkService.createArtwork(data);

      dispatch(setImageId(id));
      dispatch(setContact(contactInfo));
      dispatch(fetchSuccess());

      setOpenShare(false);
      setOpenThankyou(true);
    } catch (e) {
      const { message = ERROR_MESSAGE } = e;
      dispatch(fetchError(message));
    }
  };

  const redirectToGallery = () => {
    history.push('/gallery');
  };

  const openShareECardPopup = () => {
    if (contact) {
      alert.error(
        'This artwork is already uploaded, please wait for admin’s approval'
      );
      return;
    }
    setOpenShare(true);
  };

  const closeShareECardPopup = () => {
    setOpenShare(false);
  };

  const closeThankyouPopup = () => {
    setOpenThankyou(false);
  };

  const Component = isMobile ? UploadedMobile : UploadedDesktop;

  return (
    <>
      <ShareECardPopup
        isOpen={openShare}
        onClose={closeShareECardPopup}
        submitHandler={postToGallery}
      />
      <ThankyouPopup isOpen={openThankyou} onClose={closeThankyouPopup} />
      <Component
        handleClick={handleClick}
        handlePostGallery={openShareECardPopup}
        handleViewGallery={redirectToGallery}
        handleShareECard={handleSubmitEmail}
      />
    </>
  );
};
