import styled from 'styled-components/macro';
import { StageSize } from 'types/artwork/studio';
import { ColorPicker, Texture } from './Navigation';
import { useEffect } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';

interface StageFrameProps {
  format: StageSize;
}

export const StageFrame: React.FC<StageFrameProps> = ({ format }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const stageWidth = window.innerWidth;
    // Default is square type.
    let stageHeight: number = stageWidth;

    switch (format) {
      case StageSize.MOBILE:
        stageHeight = (stageWidth * 16) / 9;
        break;
      case StageSize.DESKTOP:
        stageHeight = (stageWidth * 9) / 16;
    }

    const stage = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });

    dispatch(setStage({ stage, color: '', texture: '' }));
  }, [dispatch, format]);

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
