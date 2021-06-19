import styled from 'styled-components/macro';
import { StageFormat } from 'types/artwork/studio';
import { useEffect } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';

type StageFrameProps = {
  format: StageFormat;
};

export const StageFrameDesktop = ({ format }: StageFrameProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const maxWidth = window.innerWidth * 0.45;
    const maxHeight = window.innerHeight - 140;
    const squareWidth = Math.min(maxWidth, maxHeight);

    // Default is square type.
    let stageHeight: number = squareWidth;
    let stageWidth: number = squareWidth;

    switch (format) {
      case StageFormat.MOBILE:
        stageHeight = maxHeight;
        stageWidth = (maxHeight * 9) / 16;
        break;
      case StageFormat.DESKTOP:
        stageWidth = maxWidth;
        stageHeight = (maxWidth * 9) / 16;
    }

    const stage = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });

    dispatch(setStage({ stage, color: '', texture: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format]);

  return (
    <Wrapper className="flex flex-row items-center justify-center relative ">
      <StageContainer
        id="stageContainer"
        className="flex flex-row items-center justify-center border-2 border-solid border-gray-light"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const StageContainer = styled.div``;