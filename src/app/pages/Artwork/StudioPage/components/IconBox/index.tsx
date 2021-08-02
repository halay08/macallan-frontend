import { IconBoxDesktop } from './IconBoxDesktop';
import { IconBoxMobile } from './IconBoxMobile';
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

export const IconBox = () => {
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();

  const drawIcon = (icon: string) => {
    const [, layer] = stage.getLayers();

    const iconImage = new window.Image();
    iconImage.onload = () => {
      const { width, height } = iconImage;
      const canvas = getCanvas(stage, { width, height });
      const ctx = canvas.getContext('2d');

      if (ctx) {
        dispatch(fetchStart());
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(iconImage, 0, 0, width, height);

        const [x, y] = getImageObjectPos(format);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'icon');
        node.size({ width: width / 2, height: height / 2 });
        layer.add(node);

        // add node to transformer
        addNodeTransformer(stage, layer, node);

        // Set events
        onNodeAction(node);
      }
      dispatch(fetchSuccess());
    };
    iconImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    iconImage.src = `/assets/icons/img/${icon}`;
  };

  const { isMobile } = useResponsive();
  return isMobile ? (
    <IconBoxMobile drawIcon={drawIcon} />
  ) : (
    <IconBoxDesktop drawIcon={drawIcon} />
  );
};
