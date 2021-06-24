import styled from 'styled-components/macro';
import bg from '../assets/instruction-bg-desktop.png';
import { Concept, StartButton } from './index';
import { Bottle03 } from '../../StudioPage/assets/bottles';
import { MacallanLogo } from 'app/components/Footer/MacallanLogo';

export const InstructionDesktop = () => {
  return (
    <>
      <div className="box-border">
        <div className="flex flex-row h-auto min-h-screen">
          <BackgroundWrapper className="flex flex-col w-3/6 border-r-1 border-solid border-gray-light pb-8 ">
            <Bottle src={Bottle03} />
          </BackgroundWrapper>
          <ContentWrapper className="flex flex-col w-3/6 items-center">
            <Content className="flex flex-col items-center justify-center">
              <div className="w-4/5">
                <Concept />
              </div>
              <div className="px-4 text-center my-5 text-4xl leading-9">
                Unleash your inner creativity to create your own art work here.
              </div>
              <div className="w-2/5">
                <StartButton />
              </div>
            </Content>
            <div className="w-3/5">
              <MacallanLogo width="100%" className="mb-10" />
            </div>
          </ContentWrapper>
        </div>
      </div>
    </>
  );
};

const Bottle = styled.img`
  position: absolute;
  height: 86vh;
  width: auto;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  padding: 0 15%;
  flex: 1;
`;

const BackgroundWrapper = styled.div`
  background: url(${bg}) top center no-repeat;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  background: #e5e1e3;
  box-shadow: inset 15px 0px 15px -10px #ccc;
`;
