import styled from 'styled-components/macro';
import { StageSize } from 'types/artwork/studio';
import { ColorPicker, Texture } from './Navigation';
import { useEffect } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';
import { DEFAULT_COLOR } from 'config/studio';

interface StageFrameProps {
  size: StageSize;
}

export const StageFrame: React.FC<StageFrameProps> = ({ size }) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });

    console.log(DEFAULT_COLOR);

    dispatch(setStage({ stage, color: DEFAULT_COLOR, texture: '' }));
  }, [stageWidth, stageHeight, dispatch]);

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
