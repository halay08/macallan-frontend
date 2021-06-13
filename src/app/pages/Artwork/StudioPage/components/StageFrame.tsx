import styled from 'styled-components/macro';
import { StageFormat } from 'types/artwork/studio';
import { ColorPicker, Texture } from './Navigation';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';

type StageFrameProps = {
  format: StageFormat;
  shouldShowTools: Boolean;
};

export const StageFrame = ({
  format,
  shouldShowTools
}: StageFrameProps): JSX.Element => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const stageWidth = window.innerWidth;
    // Default is square type.
    let stageHeight: number = stageWidth;

    switch (format) {
      case StageFormat.MOBILE:
        stageHeight = (stageWidth * 16) / 9;
        break;
      case StageFormat.DESKTOP:
        stageHeight = (stageWidth * 9) / 16;
    }

    const stage = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });

    setHeight(stageHeight);
    dispatch(setStage({ stage, color: '', texture: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper
      className="flex flex-row items-center justify-center relative"
      height={height}
    >
      {shouldShowTools && (
        <>
          <ColorPicker />
          <Texture />
        </>
      )}
      <StageContainer
        id="stageContainer"
        className={`flex flex-row items-center justify-center ${
          format === StageFormat.DESKTOP
            ? 'border border-t-1 border-b-1 border-r-0 border-l-0 border-dashed border-gray-light'
            : ''
        }`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ height: number }>`
  // height: calc(100vh - 363px);
  height: ${props => `${props.height}px`};
  min-height: 300px;
`;
const StageContainer = styled.div`
  height: fit-content;
`;
