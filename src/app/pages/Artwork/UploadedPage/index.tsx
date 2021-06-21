import { UploadedDesktop } from './UploadedDesktop';
import { UploadedMobile } from './UploadedMobile';
import { useResponsive } from 'utils/responsive';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { FinalImage } from './FinalImage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useHistory } from 'react-router-dom';
import { fetchError } from 'redux/actions';
import { ERROR_MESSAGE, SHARER_MESSAGE } from 'app/helpers/constants';
import { UploadedTypes } from 'types';
import { useAlert } from 'react-alert';
import { Modal } from 'app/components/Modal';

export const UploadedPage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const { id } = useSelector<AppState, AppState['artwork']>(
    ({ artwork }) => artwork
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (!stage.name) {
      history.push('/artwork/format');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextButtonHandler = () => {};

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

  const handleSubmitEmail = () => {
    if (!email) {
      alert.error('Please provide email to share!');
      return;
    }

    const imageLink = getImageLink();
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
      case UploadedTypes.WeiboIcon:
        handleShareSocial(
          `http://service.weibo.com/share/share.php?title=${SHARER_MESSAGE}&url=`
        );
        break;
      case UploadedTypes.WhatsappIcon:
        handleShareWhatsapp();
        break;
      case UploadedTypes.DouyinIcon:
        break;
      case UploadedTypes.WechatIcon:
        break;
      case UploadedTypes.ECardIcon:
        setIsOpenModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Your Own - Upload</title>
        <meta name="description" content="Create Your Own - Upload" />
      </Helmet>
      <Modal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        onSubmit={handleSubmitEmail}
        title="Share by Email"
      >
        <label className="mr-2" htmlFor="sharer-email">
          Email to share:
        </label>
        <input
          id="sharer-email"
          className="shadow appearance-none border rounded p-1 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
      </Modal>
      {isMobile ? (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          StageFrame={<FinalImage />}
        >
          <UploadedMobile handleClick={handleClick} />
        </PageWrapper>
      ) : (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          StageFrame={<FinalImage />}
        >
          <div className="flex pt-28 h-full">
            <UploadedDesktop handleClick={handleClick} />
          </div>
        </PageWrapper>
      )}
    </>
  );
};
