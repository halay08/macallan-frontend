import styled from 'styled-components/macro';
import { MacallanLogo } from './MacallanLogo';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex flex-row items-center justify-between h-20 border-t-4 border-gray-light border-solid">
        <MacallanLogo />
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer``;
