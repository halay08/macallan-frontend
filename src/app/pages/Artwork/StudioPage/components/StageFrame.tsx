import styled from 'styled-components/macro';
import { StageSize } from 'types/artwork/studio';
import { ColorPicker, Texture } from './Navigation';
import { useState, useEffect } from 'react';
import Konva from 'konva';

interface StageFrameProps {
  size: StageSize;
}

export const StageFrame: React.FC<StageFrameProps> = ({ size }) => {
  const stageWidth = window.innerWidth;
  // Default is square type.
  let stageHeight: number = stageWidth;

  switch (size) {
    case StageSize.MOBILE:
      stageHeight = (stageWidth * 16) / 9;
      break;
    case StageSize.DESKTOP:
      stageHeight = (stageWidth * 9) / 16;
  }

  const [, setStage] = useState({} as Konva.Stage);

  useEffect(() => {
    const s = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });
    setStage(s);
  }, [stageWidth, stageHeight]);

  return (
    <Wrapper className="flex flex-row items-center justify-center">
      <ColorPicker />
      <Texture />
      <StageContainer id="stageContainer" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 363px);
  overflow: auto;
`;
const StageContainer = styled.div``;
