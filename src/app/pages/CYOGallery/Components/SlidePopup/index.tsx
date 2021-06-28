import styled, { css } from 'styled-components';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import { ReactNode } from 'react';

type Props = {
  show: Boolean;
  children: ReactNode;
  width?: string;
  closeHandler: Function;
  className?: string;
};

export const SlidePopup = ({
  show,
  children,
  closeHandler,
  className = ''
}: Props) => {
  return (
    <Wrapper className={className} show={show}>
      <button
        className="p-2 -ml-2 focus:outline-none"
        onClick={() => closeHandler()}
      >
        <CloseSvg className="w-4 h-4" />
      </button>

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ show: Boolean }>`
  padding: 5rem 1.5rem 1rem;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  ${({ show }) =>
    show
      ? `
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: transform 500ms cubic-bezier(0, 0.23, 0, 1), background 500ms cubic-bezier(0, 0.23, 0, 1) 150ms;
        `
      : css`
          opacity: 0;
          transform: translate3d(100%, 0, 0);
          transition: transform 500ms cubic-bezier(1, 0, 0.775, 0.895) 300ms,
            background 700ms cubic-bezier(1, 0, 0.775, 0.895),
            opacity 0ms linear 700ms;
        `}
`;
