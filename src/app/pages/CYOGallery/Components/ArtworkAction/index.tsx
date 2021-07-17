import { DownloadIcon, ShareIcon } from '../../assets';
import { fetchError } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { toDataURL } from 'app/helpers';
import { useAlert } from 'react-alert';
import { TArtwork } from 'types';
import { useHistory } from 'react-router-dom';

type Props = {
  artwork: TArtwork;
  onClose: Function;
};

export const ArtworkAction = ({ artwork, onClose }: Props) => {
  const { message, id } = artwork;
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();

  const handleDownload = async () => {
    try {
      const image = document.getElementById(id);
      const a = document.createElement('a');
      const src = image?.getAttribute('src') || '';
      if (!src) return;
      a.href = await toDataURL(src);
      a.download = 'Macallan_CYO_artwork.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch ({ message = ERROR_MESSAGE }) {
      dispatch(fetchError(message));
    }
  };

  const copyToClipboard = () => {
    const link = `${window.location.origin}/gallery/${id}`;
    const textarea = document.createElement('textarea');
    textarea.value = link;
    textarea.setAttribute('readonly', '');
    textarea.style.display = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert.success('Link copied');
  };

  return (
    <>
      <div className="mt-3 sm:mt-0 h-full flex justify-center items-center font-sans font-semibold text-sm sm:text-xl tracking-widest uppercase text-center">
        {message}
      </div>
      <div className="flex justify-center mt-3 sm:mt-0">
        <button
          onClick={() => handleDownload()}
          className="w-8 sm:w-12 focus:outline-none mx-2 sm:mx-4"
        >
          <img src={DownloadIcon} alt="download" />
        </button>
        <button
          onClick={() => copyToClipboard()}
          className="w-8 sm:w-12 focus:outline-none mx-2 sm:mx-4 rounded bg-dark rounded-full flex justify-center items-center max-w-full"
        >
          <img className="w-4 sm:w-5" src={ShareIcon} alt="share" />
        </button>
      </div>
      <button
        onClick={() => history.push('/artwork/instruction')}
        type="button"
        className="mt-3 sm:mt-6 bg-dark py-1 sm:py-2 font-semibold focus:outline-none"
      >
        Create Your Own
      </button>
    </>
  );
};
