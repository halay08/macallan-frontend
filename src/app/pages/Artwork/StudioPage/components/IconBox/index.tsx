import { IconBoxDesktop } from './IconBoxDesktop';
import { IconBoxMobile } from './IconBoxMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import Konva from 'konva';
import {
  createImageNode,
  getCanvas,
  getImageObjectPos,
  onNodeAction
} from 'app/helpers';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const IconBox = () => {
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const size = { width: 60, height: 60 };
  const imageSize = { width: 150, height: 150 };
  const dispatch = useDispatch();

  const drawIcon = (icon: string) => {
    const canvas = getCanvas(stage, imageSize);
    const ctx = canvas.getContext('2d');
    const [layer] = stage.getLayers().slice(-1);

    const iconImage = new window.Image();
    iconImage.onload = () => {
      if (ctx) {
        dispatch(fetchStart());
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(iconImage, 0, 0, iconImage.width, iconImage.height);

        const [x, y] = getImageObjectPos(format);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'icon');
        node.size(size);
        layer.add(node);

        // Select current node by default
        const [transformer] = stage.find('Transformer') as Konva.Transformer[];
        transformer.setAttr('rotateEnabled', false);
        transformer.nodes([node]);

        // Set events
        onNodeAction(node);
      }
      dispatch(fetchSuccess());
    };
    iconImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    iconImage.src = `/assets/icons/svg/${icon}`;
  };

  const { isMobile } = useResponsive();
  return isMobile ? (
    <IconBoxMobile drawIcon={drawIcon} />
  ) : (
    <IconBoxDesktop drawIcon={drawIcon} />
  );
};
