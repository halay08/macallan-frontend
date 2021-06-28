import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { SizeBox } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { Footer } from 'app/components/Footer';
import { StageFormat } from 'types';
import { useEffect, useState } from 'react';

export const FormatPageMobile = () => {
  const history = useHistory();
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const nextButtonHandler = () => {
    if (!selectedFormat) return;
    history.push('/artwork/studio');
  };

  useEffect(() => {
    const maxWidth = window.innerWidth * 0.6;
    const maxHeight = Math.max(window.innerHeight - 500, 100);
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

    setWidth(stageWidth);
    setHeight(stageHeight);
  }, [selectedFormat]);

  return (
    <>
      <Helmet>
        <title>Create Your Own - Select Format</title>
        <meta name="description" content="Create Your Own - Select Format" />
      </Helmet>
      <PageWrapper
        StageFrame={
          <FormatPreview
            className="border border-solid border-gray-light m-auto mt-12"
            height={height}
            width={width}
          />
        }
        hasFooter={false}
      >
        <SizeBox />
        <Footer
          className="absolute w-full"
          nextButtonHandler={nextButtonHandler}
          showNextButton={!!selectedFormat}
          prevButtonHandler={() => history.push('/artwork/instruction')}
        />
      </PageWrapper>
    </>
  );
};

const FormatPreview = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;
