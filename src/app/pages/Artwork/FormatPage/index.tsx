import { Helmet } from 'react-helmet-async';
import { SizeBox } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { StageFrameDesktop as StageFrame } from '../StudioPage/components/StageFrame/StageFrameDesktop';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useResponsive } from 'utils/responsive';

export const FormatPage = () => {
  const history = useHistory();
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { isMobile } = useResponsive();

  const nextButtonHandler = () => {
    if (!selectedFormat) return;
    history.push('/artwork/studio');
  };

  const renderStageFrame = () =>
    selectedFormat && !isMobile ? (
      <StageFrame format={selectedFormat} />
    ) : (
      <></>
    );

  return (
    <>
      <Helmet>
        <title>Create Your Own - Select Format</title>
        <meta name="description" content="Create Your Own - Select Format" />
      </Helmet>
      <PageWrapper
        StageFrame={renderStageFrame()}
        showNextButton={!!selectedFormat}
        nextButtonHandler={nextButtonHandler}
        prevButtonHandler={() => history.push('/artwork/instruction')}
      >
        <SizeBox />
      </PageWrapper>
    </>
  );
};
