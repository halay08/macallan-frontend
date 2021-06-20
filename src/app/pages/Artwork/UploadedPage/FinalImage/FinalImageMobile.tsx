import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import Konva from 'konva';

export const FinalImageMobile = () => {
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );

  useEffect(() => {
    if (!stage.name) return;

    const [transformer] = stage.find('Transformer') as Konva.Transformer[];
    transformer.nodes([]);

    stage.toImage({
      callback(image) {
        document.getElementById('finalImageContainer')?.append(image);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="finalImageContainer" />;
};
