import { useResponsive } from 'utils/responsive';
import { FinalImageDesktop } from './FinalImageDesktop';
import { FinalImageMobile } from './FinalImageMobile';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import Konva from 'konva';
import { useEffect } from 'react';

export const FinalImage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );

  useEffect(() => {
    if (!stage.name) return;

    const [transformer] = stage.find('Transformer') as Konva.Transformer[];
    if (transformer instanceof Konva.Transformer) {
      transformer.nodes([]);
    }

    stage.toImage({
      pixelRatio: 3,
      callback(image) {
        image.className = 'w-full border-2 border-gray-light';
        document.getElementById('finalImageContainer')?.append(image);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile ? <FinalImageMobile /> : <FinalImageDesktop />;
};
