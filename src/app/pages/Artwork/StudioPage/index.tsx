import { Helmet } from 'react-helmet-async';
import { Footer } from 'app/components/Footer';
import {
  ShapeBox,
  StageFrame,
  TextBox,
  IconBox,
  BottleBox
} from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useLocalStorage } from 'utils/localStorage';
import { useState } from 'react';
import { SceneType, StageSize } from 'types/artwork/studio';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setColor, setTexture } from 'redux/actions/studio';

export const StudioPage = () => {
  const [size] = useLocalStorage('stageSize', StageSize.SQUARE);
  const [scene, setScene] = useState(SceneType.SHAPE);
  const history = useHistory();
  const dispatch = useDispatch();

  const resetSelectedStyles = () => {
    dispatch(setColor({ color: '' }));
    dispatch(setTexture({ texture: '' }));
  };

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

  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      <PageWrapper hasFooter={false}>
        <StageFrame size={size} />
        {scene === SceneType.SHAPE && <ShapeBox />}
        {scene === SceneType.TEXT && <TextBox />}
        {scene === SceneType.ICON && <IconBox />}
        {scene === SceneType.BOTTLE && <BottleBox />}
        <Footer
          nextButtonHandler={nextButtonHandler}
          prevButtonHandler={prevButtonHandler}
        />
      </PageWrapper>
    </>
  );
};
