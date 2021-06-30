import styled from 'styled-components/macro';
import bg from 'app/pages/Artwork/InstructionPage/assets/instruction-bg.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { StageFormat } from 'types';

export const FinalImageDesktop = () => {
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const maxWidth = window.innerWidth * 0.4;
    const maxHeight = window.innerHeight - 200;
    const squareWidth = Math.min(maxWidth, maxHeight);

    // Default is square type.
    let stageHeight: number = squareWidth;
    let stageWidth: number = squareWidth;

    switch (selectedFormat) {
      case StageFormat.MOBILE:
        stageHeight = maxHeight;
        stageWidth = (maxHeight * 9) / 16;
        break;
      case StageFormat.DESKTOP:
        stageWidth = maxWidth;
        stageHeight = (maxWidth * 9) / 16;
    }

    setHeight(stageHeight);
    setWidth(stageWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFormat]);

  return (
    <Wrapper
      id="finalImageContainer"
      height={height}
      width={width}
      className="flex flex-row items-center justify-center mx-auto"
    />
  );
};

const Wrapper = styled.div<{ height: number; width: number }>`
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${bg}) center center no-repeat;
  background-size: cover;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
