import { Footer } from 'app/components/Footer';
import { Header } from 'app/components/Header';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useResponsive } from 'utils/responsive';
import { ReactComponent as LogoSvg } from './assets/logo.svg';
import bg from 'app/pages/Artwork/InstructionPage/assets/instruction-bg-desktop.png';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { fetchError, fetchStart, fetchSuccess } from 'redux/actions';
import { ArtworkService } from 'app/services';
import { ERROR_MESSAGE } from 'app/helpers/constants';

export const FinalPage = () => {
  const { isMobile } = useResponsive();
  const { id, message } = useSelector<AppState, AppState['artwork']>(
    ({ artwork }) => artwork
  );
  const dispatch = useDispatch();

  const handleUpload = async () => {
    if (!id) return;
    try {
      dispatch(fetchStart());

      const data = {
        imgUrl: `images/${id}.png`,
        message,
        status: 'in_review'
      };

      const artworkService = new ArtworkService();
      await artworkService.createArtwork(data);
      dispatch(fetchSuccess());
    } catch ({ message = ERROR_MESSAGE }) {
      dispatch(fetchError(message));
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Your Own - Final Step</title>
        <meta name="description" content="Create Your Own - Final step" />
      </Helmet>
      <div className="box-border">
        {!isMobile && <Header />}
        <StageContainer className="h-full">
          {isMobile && <TopImage className="h-40 mb-8" />}
          <div className="text-center">
            {isMobile ? (
              <LogoSvg className="w-2/3 mx-auto" />
            ) : (
              <strong className="text-3xl">STEP 8: FINAL STEP</strong>
            )}
          </div>
          <div className="text-center my-8 md:my-24">
            <p className="text-xl md:text-3xl">
              Thank you for being part of
              <br />
              The Macallan Create Your Own
            </p>
          </div>
          <div className="w-2/3 m-auto grid grid-cols-1 gap-y-6 md:grid-cols-4 text-center md:text-2xl font-AGaramondPro-bold">
            <button
              className="outline-none focus:outline-none active:outline-none"
              onClick={() => handleUpload()}
            >
              <Button className="flex flex-row items-center justify-center rounded md:w-48 h-12 md:h-24 px-4">
                Share Your Artwork
              </Button>
            </button>
            <a href="/gallery">
              <Button className="flex flex-row items-center justify-center rounded md:w-48 h-12 md:h-24 px-4">
                View Gallery Wall
              </Button>
            </a>
            <a href="/artwork/format">
              <Button className="flex flex-row items-center justify-center rounded md:w-48 h-12 md:h-24 px-4">
                Create Another Artwork
              </Button>
            </a>
            <a href="/">
              <Button className="flex flex-row items-center justify-center rounded md:w-48 h-12 md:h-24 px-4">
                Visit Our Virtual Site
              </Button>
            </a>
          </div>
        </StageContainer>
        <Footer showNextButton={false} showPrevButton={false} />
      </div>
    </>
  );
};

const StageContainer = styled.div`
  min-height: calc(100vh - 9rem - 120px);
`;

const Button = styled.div`
  background-color: #f9e21d;
`;

const TopImage = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.15)
    ),
    url(${bg}) center bottom no-repeat;
  background-size: cover;
`;
