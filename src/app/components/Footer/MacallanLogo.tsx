import { ReactComponent as LogoSvg } from './assets/macallan-logo.svg';
import styled from 'styled-components/macro';

interface MacallanLogoProps {
  width?: string;
  className?: string;
}

export const MacallanLogo: React.FC<MacallanLogoProps> = ({
  width = '180px',
  className = ''
}) => {
  const LogoStyled = styled(LogoSvg)`
    width: ${width};
  `;

  return (
    <a href="/" className={`logo ${className}`}>
      <LogoStyled />
    </a>
  );
};
