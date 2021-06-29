import background from './assets/desktop-header.png';
import { ReactComponent as LogoSvg } from './assets/desktop-logo.svg';
import styled from 'styled-components/macro';

export const HeaderDesktop = () => {
  return (
    <HeaderWrapper>
      <div className="flex flex-row items-center justify-start h-36 relative">
        <img alt="logo" className="absolute h-full" src={background} />
        <LogoSvg className="z-10 h-full absolute bottom-2.5" />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
