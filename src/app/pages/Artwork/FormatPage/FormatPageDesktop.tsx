import { Helmet } from 'react-helmet-async';
import { SizeBoxDesktop } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { StageFrameDesktop as StageFrame } from '../StudioPage/components/StageFrame/StageFrameDesktop';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

export const FormatPageDesktop = () => {
  const history = useHistory();
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );

  const nextButtonHandler = () => {
    if (!selectedFormat) return;
    history.push('/artwork/studio');
  };

  return (
    <>
      <Helmet>
        <title>Create Your Own - Select Format</title>
        <meta name="description" content="Create Your Own - Select Format" />
      </Helmet>
      <PageWrapper
        StageFrame={<StageFrame format={selectedFormat} />}
        isNextButtonDisable={!selectedFormat}
        nextButtonHandler={nextButtonHandler}
        prevButtonHandler={() => history.push('/artwork/instruction')}
      >
        <SizeBoxDesktop />
      </PageWrapper>
    </>
  );
};
