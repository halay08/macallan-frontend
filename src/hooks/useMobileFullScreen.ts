import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useResponsive } from 'utils/responsive';

const useMobileFullScreen = () => {
  const { isMobile } = useResponsive();
  useEffect(() => {
    if (isMobile) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [isMobile]);

  return { Wrapper };
};

export { useMobileFullScreen };

const Wrapper = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;
