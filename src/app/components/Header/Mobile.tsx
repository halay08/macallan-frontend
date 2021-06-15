import { Logo } from './Logo';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="flex flex-row items-center justify-between h-24 border-b border-gray-light border-solid">
        <Logo />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
