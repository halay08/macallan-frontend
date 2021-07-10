import styled from 'styled-components/macro';
import { ReactComponent as LoaderIcon } from './assets/loader.svg';

export const Loader = ({ isLoading, children }) => {
  return (
    <div className="w-full h-full">
      <LoaderContainer
        isLoading={isLoading}
        className="bg-white fixed w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-650 ease-in-out"
      >
        <LoaderIcon />
      </LoaderContainer>
      {children}
    </div>
  );
};

const LoaderContainer = styled.div<{ isLoading: boolean }>`
  transition: all 500ms ease;
  ${({ isLoading }) =>
    isLoading ? `opacity: 0.6;z-index: 60;` : `opacity: 0;z-index: -1`}
`;
