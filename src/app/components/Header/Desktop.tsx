import { ReactComponent as LogoSvg } from './assets/logo.svg';
import styled from 'styled-components/macro';

export const HeaderDesktop = () => {
  return (
    <HeaderWrapper>
      <div className="flex flex-row items-center justify-start h-36">
        <a href="/" className="logo ml-8 w-2/5">
          <LogoSvg />
        </a>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
