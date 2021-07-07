import styled from 'styled-components/macro';
import { StageFormat } from 'types/artwork/studio';
import { ColorPicker, Texture } from '../Navigation';
import { useEffect } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';
import { useResponsive } from 'utils/responsive';

type StageFrameProps = {
  format: StageFormat;
  shouldShowTools: Boolean;
  hide?: Boolean;
  isFramed?: Boolean;
};

export const StageFrameMobile = ({
  format,
  shouldShowTools,
  hide,
  isFramed
}: StageFrameProps): JSX.Element => {
  const { isMobile } = useResponsive();
  const dispatch = useDispatch();

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

    dispatch(setStage({ stage, color: '', texture: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper
      className={
        'flex flex-row items-center justify-center relative' +
        (hide ? ' hidden' : '')
      }
    >
      {!!(shouldShowTools && isMobile) && (
        <>
          <ColorPicker />
          <Texture />
        </>
      )}
      <StageContainer
        id="stageContainer"
        isFramed={isFramed}
        className={`flex flex-row items-center justify-center ${
          format === StageFormat.DESKTOP
            ? 'border border-t-1 border-b-1 border-r-0 border-l-0 border-dashed border-gray-light'
            : ''
        }`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 300px;
`;
const StageContainer = styled.div<{ isFramed: Boolean | undefined }>`
  height: fit-content;

  ${({ isFramed }) =>
    isFramed &&
    `& .konvajs-content{
      transform: scale(0.8);
      canvas {
        border: 1px solid #d4d4d8 !important;
      }
    }
  `}
`;
