import { ReactComponent as LogoSvg } from './assets/logo.svg';
import styled from 'styled-components/macro';

export const Logo = () => {
  return (
    <a href="/" className="logo m-auto">
      <LogoStyled />
    </a>
  );
};

const LogoStyled = styled(LogoSvg)`
  width: 200px;
`;