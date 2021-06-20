import { SignOffDesktop } from './SignOffDesktop';
import { SignOffMobile } from './SignOffMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { getCanvas, onNodeAction, createImageNode } from 'app/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { Layer } from 'konva/lib/Layer';
import { setMessage } from 'redux/actions';

export const SignOff = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();
  const [font, setFont] = useState('AGaramondPro-Regular');
  const [fontSize, setFontSize] = useState(15);
  const [stageHeight, setStageHeight] = useState(0);
  const [layer, setLayer] = useState<Layer>();

  useEffect(() => {
    setStageHeight(stage.height());

    const initiatingLayer = new Konva.Layer();
    stage.add(initiatingLayer);
    setLayer(initiatingLayer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLogo = ({ x, y }) => {
    const canvas = getCanvas(stage);
    const ctx = canvas.getContext('2d');
    const iconImage = new window.Image();
    iconImage.onload = () => {
      if (ctx) {
        dispatch(fetchStart());
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(iconImage, 0, 0, 225, 30);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'icon');
        layer?.add(node);
      }
      dispatch(fetchSuccess());
    };
    iconImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    iconImage.src = `/assets/logo/The Macallan_logo_signoff.svg`;
  };

  const addBackground = ({ height, width }) => {
    const container = new Konva.Rect({
      x: 0,
      y: stageHeight,
      height,
      width,
      fill: '#fff',
      draggable: false
    });
    layer?.add(container);
  };

  const drawText = (text: string) => {
    if (stageHeight === stage.height()) {
      const addedHeight = stageHeight + fontSize * 3;
      stage.height(addedHeight);
      const width = stage.width();

      addBackground({ height: addedHeight, width });
      addLogo({ x: width - 250, y: addedHeight - 35 });
    }

    const oldNode = stage.find('#signOff');
    if (oldNode.length) {
      oldNode[0].destroy();
    }

    const node = new Konva.Text({
      id: 'signOff',
      x: 20,
      y: stageHeight + fontSize,
      text,
      align: 'left',
      fontSize: fontSize * 1.5,
      fontFamily: font,
      fill: '#000',
      draggable: false
    });

    layer?.add(node);
    // Set events
    onNodeAction(node);
  };

  const onTextChanged = evt => {
    const text = evt.target.value;
    drawText(text);

    dispatch(setMessage(text));
    evt.target.focus();
  };

  return isMobile ? (
    <SignOffMobile onTextChanged={onTextChanged} />
  ) : (
    <SignOffDesktop
      onTextChanged={onTextChanged}
      setFont={setFont}
      setFontSize={setFontSize}
    />
  );
};
