import { Helmet } from 'react-helmet-async';
import { SizeBox } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { StageFormat } from 'types';
import styled from 'styled-components/macro';

export const FormatPage = () => {
  const history = useHistory();
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );

  const nextButtonHandler = () => {
    if (!selectedFormat) return;
    history.push('/artwork/studio');
  };

  const stageFrame = () => {
    switch (selectedFormat) {
      case StageFormat.DESKTOP:
        return <Desktop className="mx-auto" />;
      case StageFormat.MOBILE:
        return <Mobile className="mx-auto" />;
      case StageFormat.SQUARE:
        return <Square className="mx-auto" />;
      default:
        return <div />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Your Own - Select Format</title>
        <meta name="description" content="Create Your Own - Select Format" />
      </Helmet>
      <PageWrapper
        StageFrame={stageFrame()}
        showNextButton={!!selectedFormat}
        nextButtonHandler={nextButtonHandler}
        prevButtonHandler={() => history.push('/artwork/instruction')}
      >
        <SizeBox />
      </PageWrapper>
    </>
  );
};

const Square = styled.div`
  width: 70%;
  padding-top: 70%;
  border: 2px solid #bbb;
`;
const Mobile = styled.div`
  height: 70%;
  padding-right: 39.375%;
  border: 2px solid #bbb;
`;
const Desktop = styled.div`
  width: 70%;
  padding-top: 39.375%;
  border: 2px solid #bbb;
`;
