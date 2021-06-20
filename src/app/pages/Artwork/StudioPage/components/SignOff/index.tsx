import { SignOffDesktop } from './SignOffDesktop';
import { SignOffMobile } from './SignOffMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { onNodeAction } from 'app/helpers';
import { useSelector } from 'react-redux';

export const SignOff = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [font, setFont] = useState('AGaramondPro-Regular');
  const [fontSize, setFontSize] = useState(15);
  const [stageHeight, setStageHeight] = useState(0);

  useEffect(() => {
    setStageHeight(stage.height());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawText = (text: string) => {
    if (stageHeight === stage.height()) {
      stage.height(stageHeight + fontSize * 2);
    }
    const oldNode = stage.find('#signOff');
    if (oldNode.length) {
      oldNode[0].destroy();
    }

    const [layer] = stage.getLayers();

    const node = new Konva.Text({
      id: 'signOff',
      x: 20,
      y: stageHeight,
      text,
      align: 'left',
      fontSize: fontSize * 1.5,
      fontFamily: font,
      fill: '#000',
      draggable: true
    });

    layer.add(node);

    // Set events
    onNodeAction(node);
  };

  const onTextChanged = evt => {
    const text = evt.target.value;
    drawText(text);

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
