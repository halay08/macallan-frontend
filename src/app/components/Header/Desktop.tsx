import background from './assets/desktop-header.png';
import { ReactComponent as LogoSvg } from './assets/desktop-logo.svg';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

export const HeaderDesktop = () => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <div className="flex flex-row items-center justify-start h-36 relative">
        <img alt="logo" className="absolute h-full" src={background} />
        <div onClick={() => history.push('/')} className="cursor-pointer">
          <LogoSvg className="z-10 h-full absolute bottom-2.5" />
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
