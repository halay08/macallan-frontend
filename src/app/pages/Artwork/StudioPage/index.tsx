import { Helmet } from 'react-helmet-async';
import {
  ShapeBox,
  StageFrameDesktop,
  StageFrameMobile,
  TextBox,
  IconBox,
  BottleBox,
  SignOff
} from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useEffect, useState } from 'react';
import { SceneType } from 'types/artwork/studio';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setColor, setTexture } from 'redux/actions/studio';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useResponsive } from 'utils/responsive';

export const StudioPage = () => {
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const [scene, setScene] = useState(SceneType.SHAPE);
  const [Content, setContent] = useState(<ShapeBox />);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const resetSelectedStyles = () => {
    dispatch(setColor({ color: '' }));
    dispatch(setTexture({ texture: '' }));
  };

  useEffect(() => {
    if (!format) history.goBack();
  }, [format, history]);

  const nextButtonHandler = () => {
    // Reset selected color/texture.
    resetSelectedStyles();

    switch (scene) {
      case SceneType.SHAPE:
        setScene(SceneType.TEXT);
        break;
      case SceneType.TEXT:
        setScene(SceneType.ICON);
        break;
      case SceneType.ICON:
        setScene(SceneType.BOTTLE);
        break;
      case SceneType.BOTTLE:
        setScene(SceneType.SIGN_OFF);
        break;
    }
  };

  const prevButtonHandler = () => {
    // Reset selected color/texture.
    resetSelectedStyles();

    switch (scene) {
      case SceneType.SHAPE:
        history.push('/artwork/format');
        break;
      case SceneType.TEXT:
        setScene(SceneType.SHAPE);
        break;
      case SceneType.ICON:
        setScene(SceneType.TEXT);
        break;
      case SceneType.BOTTLE:
        setScene(SceneType.ICON);
        break;
      case SceneType.SIGN_OFF:
        setScene(SceneType.BOTTLE);
        break;
    }
  };

  useEffect(() => {
    switch (scene) {
      case SceneType.SHAPE:
        setContent(<ShapeBox />);
        break;
      case SceneType.TEXT:
        setContent(<TextBox />);
        break;
      case SceneType.ICON:
        setContent(<IconBox />);
        break;
      case SceneType.BOTTLE:
        setContent(<BottleBox />);
        break;
      case SceneType.SIGN_OFF:
        setContent(<SignOff />);
        break;
    }
  }, [scene]);

  const shouldShowTools = scene === SceneType.SHAPE || scene === SceneType.TEXT;
  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      {isMobile ? (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
          StageFrame={
            <StageFrameMobile
              format={format}
              shouldShowTools={shouldShowTools}
            />
          }
        >
          {Content}
        </PageWrapper>
      ) : (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
          StageFrame={<StageFrameDesktop format={format} />}
        >
          <div className="flex pt-28 h-full">{Content}</div>
        </PageWrapper>
      )}
    </>
  );
};
