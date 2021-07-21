import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { calcStageResolution } from '../../../helpers';

export const FinalImageDesktop = () => {
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { stageWidth, stageHeight } = calcStageResolution(selectedFormat);
    setHeight(stageHeight);
    setWidth(stageWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFormat]);

  return (
    <Wrapper
      id="finalImageContainer"
      height={height}
      width={width}
      className="p-2 flex flex-row items-center justify-center mx-auto z-10"
    />
  );
};

const Wrapper = styled.div<{ height: number; width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
