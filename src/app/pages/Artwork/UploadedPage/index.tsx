import { UploadedDesktop } from './UploadedDesktop';
import { UploadedMobile } from './UploadedMobile';
import { useResponsive } from 'utils/responsive';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { FinalImage } from './FinalImage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useHistory } from 'react-router-dom';

export const UploadedPage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const history = useHistory();

  useEffect(() => {
    if (!stage.name) {
      history.push('/artwork/format');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextButtonHandler = () => {};

  const handleClick = () => {};

  return (
    <>
      <Helmet>
        <title>Create Your Own - Upload</title>
        <meta name="description" content="Create Your Own - Upload" />
      </Helmet>
      {isMobile ? (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          StageFrame={<FinalImage />}
        >
          <UploadedMobile handleClick={handleClick} />
        </PageWrapper>
      ) : (
        <PageWrapper
          nextButtonHandler={nextButtonHandler}
          StageFrame={<FinalImage />}
        >
          <div className="flex pt-28 h-full">
            <UploadedDesktop handleClick={handleClick} />
          </div>
        </PageWrapper>
      )}
    </>
  );
};
