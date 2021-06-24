import { useEffect } from 'react';
import styled from 'styled-components/macro';
import bg from '../assets/instruction-bg-mobile.png';
import { StartButton, Concept } from './index';
import { MacallanLogo } from 'app/components/Footer/MacallanLogo';

export const Instruction = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <Wrapper className="flex flex-col items-center">
      <Background src={bg} />
      <Content className="flex flex-col items-center justify-between">
        <div className="w-3/5">
          <Concept />
        </div>
        <div className="w-4/5 text-center text-xl leading-6">
          Unleash your inner creativity to create your own art work here.
        </div>
        <div className="w-2/5">
          <StartButton />
        </div>
        <MacallanLogo width="230px" className="m-0 pb-6" />
      </Content>
    </Wrapper>
  );
};

const Content = styled.div`
  flex: 1;
`;

const Background = styled.img`
  height: 50vh;
  min-width: 86%;
`;

const Wrapper = styled.div`
  background: #e5e1e3;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;
