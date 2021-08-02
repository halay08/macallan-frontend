import { BottleBoxDesktop } from './BottleBoxDesktop';
import { BottleBoxMobile } from './BottleBoxMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import {
  createImageNode,
  getCanvas,
  getImageObjectPos,
  onNodeAction,
  addNodeTransformer
} from 'app/helpers';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const BottleBox = () => {
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const size = { width: 55, height: 206 };
  const imageSize = { width: 200, height: 750 };
  const dispatch = useDispatch();

  const drawBottle = (bottle: string) => {
    const canvas = getCanvas(stage, imageSize);
    const ctx = canvas.getContext('2d');
    const [, layer] = stage.getLayers();

    dispatch(fetchStart());
    const bottleImage = new window.Image();
    bottleImage.onload = () => {
      if (ctx) {
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(bottleImage, 0, 0, bottleImage.width, bottleImage.height);

        const [x, y] = getImageObjectPos(format);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'bottle');
        node.size(size);
        layer.add(node);

        // add node to transformer
        addNodeTransformer(stage, layer, node);

        // Set events
        onNodeAction(node);
      }
      dispatch(fetchSuccess());
    };
    bottleImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    bottleImage.src = `/assets/bottles/${bottle}`;
  };

  const { isMobile } = useResponsive();

  return isMobile ? (
    <BottleBoxMobile drawBottle={drawBottle} />
  ) : (
    <BottleBoxDesktop drawBottle={drawBottle} />
  );
};
