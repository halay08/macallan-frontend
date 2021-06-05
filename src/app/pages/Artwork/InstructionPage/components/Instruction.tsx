import styled from 'styled-components/macro';
import bg from '../assets/instruction-bg.png';
import { Concept, StartButton } from '.';
import { MacallanLogo } from 'app/components/Footer/MacallanLogo';

export const Instruction = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center relative">
      <Spacing />
      <Concept />
      <Text className="px-4 text-center mt-5 mb-5">
        Unleash your inner creativity to create your own art work here.
      </Text>
      <StartButton />
      <MacallanLogo width="230px" className="mb-10" />
    </Wrapper>
  );
};

const Spacing = styled.div`
  height: 560px;
`;

const Wrapper = styled.div`
  background: #e5e1e3 url(${bg}) top center no-repeat;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  font-size: 22px;
`;
