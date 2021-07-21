import background from './assets/desktop-header.png';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

export const HeaderDesktop = () => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <div
        onClick={() => history.push('/')}
        className="flex flex-row items-center justify-start h-24 relative cursor-pointer"
      >
        <img alt="logo" className="absolute h-full" src={background} />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
