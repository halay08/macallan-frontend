import { SignOffDesktop } from './SignOffDesktop';
import { SignOffMobile } from './SignOffMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { getCanvas, createImageNode } from 'app/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { setMessage } from 'redux/actions';

const PADDING = { x: 10, y: 5 };
const TEXT_X = 15;

export const SignOff = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();
  const [font] = useState('AGaramondPro-Regular');
  const [fontSize, setFontSize] = useState(15);
  const [stageHeight, setStageHeight] = useState(0);
  const logoImageSize = { width: 487.5, height: 65 };
  const [logoSize, setLogoSize] = useState({ width: 225, height: 30 });
  const [maxLength, setMaxLength] = useState(0);

  const calcLogoPosition = (
    stageWidth: number,
    stageHeight: number,
    size: { width: number; height: number }
  ) => ({
    x: stageWidth - size.width - PADDING.x,
    y: stageHeight - size.height - PADDING.y
  });

  useEffect(() => {
    const stageWidth = stage.width();
    const maxLogoLength = Math.min(stageWidth / 2.25, logoSize.width);
    const maxLogoHeight = Math.round(maxLogoLength / 7.5);
    const maxFontSize = maxLogoHeight / 2;
    const maxCharacter =
      Math.round((stageWidth - maxLogoLength) / (maxFontSize / 1.5)) - 11;

    setMaxLength(maxCharacter);
    setLogoSize({ width: maxLogoLength, height: maxLogoHeight });
    setFontSize(maxFontSize);
  }, [logoSize.width, stage]);

  useEffect(() => {
    if (stage.name !== undefined) {
      setStageHeight(stage.height());
    }
  }, [stage]);

  useEffect(() => {
    if (!stageHeight) return;

    const isExisted = stage.find('#signOffLogo');
    if (isExisted.length) return;

    const addedHeight = stage.height() + fontSize * 3;
    stage.height(addedHeight);
    const width = stage.width();

    addBackground({ height: addedHeight, width });
    addLogo(calcLogoPosition(width, addedHeight, logoSize));
    drawText('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageHeight]);

  const addLogo = ({ x, y }) => {
    const [layer] = stage.getLayers().slice(-1);
    const canvas = getCanvas(stage, logoImageSize);
    const ctx = canvas.getContext('2d');
    const iconImage = new window.Image();
    iconImage.onload = () => {
      if (ctx) {
        dispatch(fetchStart());
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(
          iconImage,
          0,
          0,
          logoImageSize.width,
          logoImageSize.height
        );

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'icon');
        node.size(logoSize);

        layer.add(node);
      }
      dispatch(fetchSuccess());
    };
    iconImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    iconImage.src = `/assets/logo/The_Macallan_logo_signoff.svg`;
  };

  const addBackground = ({ height, width }) => {
    const [layer] = stage.getLayers().slice(-1);

    const container = new Konva.Rect({
      id: 'signOffLogo',
      x: 0,
      y: stageHeight,
      height,
      width,
      fill: '#fff',
      draggable: false
    });
    layer.add(container);
  };

  const drawText = (text: string) => {
    text = 'Created by ' + text;
    const [layer] = stage.getLayers().slice(-1);

    const oldNode = stage.find('#signOff');
    if (oldNode.length) {
      oldNode[0].destroy();
    }

    const node = new Konva.Text({
      id: 'signOff',
      width: stage.width() - logoSize.width - PADDING.x - TEXT_X,
      height: fontSize * 1.5,
      x: TEXT_X,
      y: stage.height() - fontSize * 2,
      text,
      align: 'left',
      fontSize: fontSize * 1.5,
      fontFamily: font,
      verticalAlign: 'middle',
      fill: '#000',
      draggable: false
    });

    layer.add(node);
  };

  const onTextChanged = evt => {
    const text = evt.target.value;
    drawText(text);

    dispatch(setMessage(text));
    evt.target.focus();
  };

  return isMobile ? (
    <SignOffMobile onTextChanged={onTextChanged} maxLength={maxLength - 3} />
  ) : (
    <SignOffDesktop onTextChanged={onTextChanged} maxLength={maxLength} />
  );
};
