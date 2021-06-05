import { ReactComponent as LogoSvg } from './assets/macallan-logo.svg';
import styled from 'styled-components/macro';

export const MacallanLogo = () => {
  return (
    <a href="/" className="logo m-auto">
      <LogoWrapper />
    </a>
  );
};

const LogoWrapper = styled(LogoSvg)`
  width: 180px;
`;
