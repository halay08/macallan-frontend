import { ReactComponent as StartBtnSvg } from '../assets/start-btn.svg';
import { useHistory } from 'react-router-dom';

export const StartButton = () => {
  const history = useHistory();

  const gotoFormatPage = () => {
    history.push('/artwork/format');
  };

  return (
    <button
      className="w-full focus:outline-none"
      onClick={() => gotoFormatPage()}
    >
      <StartBtnSvg className="w-full" />
    </button>
  );
};
