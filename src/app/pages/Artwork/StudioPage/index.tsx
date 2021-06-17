import { Helmet } from 'react-helmet-async';
import {
  ShapeBox,
  StageFrameDesktop,
  StageFrameMobile,
  TextBox,
  IconBox,
  BottleBox
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
    }
  };

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
          {scene === SceneType.SHAPE && <ShapeBox />}
          {scene === SceneType.TEXT && <TextBox />}
          {scene === SceneType.ICON && <IconBox />}
          {scene === SceneType.BOTTLE && <BottleBox />}
        </PageWrapper>
      ) : (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
          StageFrame={<StageFrameDesktop format={format} />}
        >
          <div className="flex pt-28 h-full">
            {scene === SceneType.SHAPE && <ShapeBox />}
            {scene === SceneType.TEXT && <TextBox />}
            {scene === SceneType.ICON && <IconBox />}
            {scene === SceneType.BOTTLE && <BottleBox />}
          </div>
        </PageWrapper>
      )}
    </>
  );
};
