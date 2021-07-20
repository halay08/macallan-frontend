import { Helmet } from 'react-helmet-async';
import {
  ShapeBox,
  StageFrameDesktop,
  StageFrameMobile,
  TextBox,
  BottleBox,
  SignOff,
  UploadedPage,
  Thankyou
} from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useEffect, useState } from 'react';
import { SceneType } from 'types/artwork/studio';
import { useHistory, Prompt } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setColor, setTexture } from 'redux/actions/studio';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useResponsive } from 'utils/responsive';
import { FinalImage } from './components/UploadedPage/FinalImage';
import { FINAL_WARNING, RELOAD_WARNING } from 'app/helpers/constants';

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

    const confirmation = ev => {
      ev.returnValue = RELOAD_WARNING;
    };
    window.addEventListener('beforeunload', confirmation);

    return () => {
      window.removeEventListener('beforeunload', confirmation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextButtonHandler = () => {
    // Reset selected color/texture.
    resetSelectedStyles();

    switch (scene) {
      case SceneType.SHAPE:
        setScene(SceneType.TEXT);
        break;
      case SceneType.TEXT:
        setScene(SceneType.BOTTLE);
        break;
      case SceneType.BOTTLE:
        setScene(SceneType.SIGN_OFF);
        break;
      case SceneType.SIGN_OFF:
        setScene(SceneType.THANK_YOU);
        break;
      case SceneType.UPLOAD:
        history.push('/artwork/final');
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
      case SceneType.BOTTLE:
        setScene(SceneType.TEXT);
        break;
      case SceneType.SIGN_OFF:
        setScene(SceneType.BOTTLE);
        break;
      case SceneType.THANK_YOU:
        setScene(SceneType.SIGN_OFF);
        break;
      case SceneType.UPLOAD:
        setScene(SceneType.THANK_YOU);
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
      case SceneType.BOTTLE:
        setContent(<BottleBox />);
        break;
      case SceneType.SIGN_OFF:
        setContent(<SignOff />);
        break;
      case SceneType.THANK_YOU:
        setContent(<Thankyou updateScene={setScene} />);
        break;
      case SceneType.UPLOAD:
        setContent(<UploadedPage />);
        break;
    }
  }, [scene]);

  const confirmationHandler = (location, action) => {
    if (action !== 'PUSH') return true;

    if (
      location.pathname === '/' ||
      location.pathname.includes('format') ||
      location.pathname.includes('gallery')
    ) {
      return RELOAD_WARNING;
    }

    if (location.pathname.includes('final')) {
      return FINAL_WARNING;
    }

    return true;
  };

  const isFinal = [SceneType.THANK_YOU, SceneType.UPLOAD].includes(scene);
  const shouldShowTools = scene === SceneType.SHAPE || scene === SceneType.TEXT;
  const shouldOverflowHeight = [SceneType.TEXT, SceneType.UPLOAD].includes(
    scene
  );

  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      <Prompt message={confirmationHandler} />
      {isMobile ? (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
          showPrevButton={scene !== SceneType.UPLOAD}
          showNextButton={scene !== SceneType.THANK_YOU}
          showMoreButton={scene === SceneType.UPLOAD}
          StageFrame={
            <>
              {isFinal && <FinalImage />}
              <StageFrameMobile
                format={format}
                shouldShowTools={shouldShowTools}
                hide={isFinal}
              />
            </>
          }
        >
          {Content}
        </PageWrapper>
      ) : (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
          showPrevButton={scene !== SceneType.UPLOAD}
          showNextButton={scene !== SceneType.THANK_YOU}
          showMoreButton={scene === SceneType.UPLOAD}
          isFixedHeight={!shouldOverflowHeight}
          StageFrame={
            <>
              {isFinal && <FinalImage />}
              <StageFrameDesktop format={format} hide={isFinal} />
            </>
          }
        >
          <div className="flex h-full">{Content}</div>
        </PageWrapper>
      )}
    </>
  );
};
