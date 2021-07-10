import { useResponsive } from 'utils/responsive';
import { ThankyouDesktop } from './ThankyouDesktop';
import { ThankyouMobile } from './ThankyouMobile';
import { SceneType } from 'types/artwork/studio';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setImageId } from 'redux/actions';
import { useEffect } from 'react';

type Props = {
  updateScene: Function;
};

export const Thankyou = ({ updateScene }: Props) => {
  const { isMobile } = useResponsive();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // reset image id
    dispatch(setImageId(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
