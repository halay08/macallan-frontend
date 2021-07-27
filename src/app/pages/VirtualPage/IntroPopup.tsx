import styled from 'styled-components';
import {
  ConceptIcon,
  DownIcon,
  UpIcon,
  PlayIcon,
  InfoIcon,
  EnterIcon
} from './assets';
import { Header } from '../Artwork/InstructionPage/components/Header';
import { Footer } from '../Artwork/InstructionPage/components/Footer';

type Props = {
  isOpen: boolean;
  onEnter: Function;
};

export const IntroPopup = ({ isOpen, onEnter }: Props) => {
  return isOpen ? (
    <>
      <Wrapper className="justify-center w-screen fixed z-50 flex outline-none focus:outline-none">
        <Background className="w-10/12 bg-white relative max-w-screen-lg m-auto">
          <Header />
          <Container className="items-center w-11/12 pb-20 sm:pt-0 py-8 sm:w-full mx-auto  flex flex-col text-secondary-light overflow-auto max-h-full">
            <h3 className="sm:text-2xl text-3xl font-bold tracking-wider">
              Welcome to
            </h3>
            <div className="w-10/12 sm:w-4/12">
              <img src={ConceptIcon} className="w-full" alt="concept" />
            </div>
            <p className="sm:text-lg font-primary tracking-wide">
              Virtual Retail Experience
            </p>
            <p className="sm:text-xl text-lg text-center font-primary tracking-wide mt-5">
              How to navigate the Experience
            </p>
            <div className="flex w-11/12 border-t border-b sm:py-3 mt-3 border-gray-dark flex-col sm:flex-row font-gotham">
              <div className="flex items-center justify-between flex-col sm:px-5 sm:py-2 py-4 flex-1 border-b sm:border-0 border-gray-dark">
                <p className="text-center">
                  Enter the Gallery and continue exploring by pressing the
                  forward arrow
                </p>
                <div className="w-full sm:py-3 pt-4">
                  <img className="h-8 mx-auto" src={UpIcon} alt="up-arrow" />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col sm:px-3 sm:py-2 py-4 sm:border-l sm:border-r border-gray-dark flex-1">
                <p className="text-center">
                  Click on the buttons to explore more throughout the Gallery
                </p>
                <div className="flex mt-3">
                  <img src={PlayIcon} className="w-14 h-14 mx-2" alt="play" />
                  <img src={InfoIcon} className="w-14 h-14 mx-2" alt="info" />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col sm:px-5 sm:py-2 py-4 flex-1 border-t sm:border-0 border-gray-dark">
                <p className="text-center">
                  Go back on your step by clicking the backward arrow
                </p>
                <div className="w-full sm:py-3 pt-4">
                  <img
                    className="h-8 mx-auto"
                    src={DownIcon}
                    alt="down-arrow"
                  />
                </div>
              </div>
            </div>
            <button
              className="sm:w-1/4 w-3/4 sm:h-16 focus:outline-none"
              onClick={() => onEnter()}
            >
              <img src={EnterIcon} className="w-full" alt="enter" />
            </button>
          </Container>
          <Footer className="absolute bottom-0 right-0" />
        </Background>
      </Wrapper>
      <div className="opacity-80 fixed inset-0 z-40 bg-gray-dark"></div>
    </>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  bottom: 5%;
  top: 5%;
  max-height: 90%;
`;

const Background = styled.div`
  background: #e3e1e4;
`;

const Container = styled.div`
  max-height: calc(100vh - 160px);
  overflow: auto;

  @media (max-width: 767px) {
    max-height: calc(100vh - 230px);
  }
`;
