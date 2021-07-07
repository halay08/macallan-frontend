import { useResponsive } from 'utils/responsive';
import { ThankyouDesktop } from './ThankyouDesktop';
import { ThankyouMobile } from './ThankyouMobile';
import { SceneType } from 'types/artwork/studio';
import { useHistory } from 'react-router-dom';

type Props = {
  updateScene: Function;
};

export const Thankyou = ({ updateScene }: Props) => {
  const { isMobile } = useResponsive();
  const history = useHistory();

  const continueHandler = () => {
    updateScene(SceneType.UPLOAD);
  };

  const startAgainHandler = () => {
    history.push('/artwork/format');
  };

  const Component = isMobile ? ThankyouMobile : ThankyouDesktop;

  return (
    <Component onContinue={continueHandler} onStartAgain={startAgainHandler} />
  );
};
