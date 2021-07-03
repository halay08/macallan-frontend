import { useState } from 'react';
import { ReactComponent as MenuIcon } from './assets/caret-right.svg';
import styled from 'styled-components/macro';
import { MenuItem } from './MenuItem';

const items = [
  { url: '/', text: 'Virtual Experience' },
  { url: '/artwork/instruction', text: 'Create your own' },
  { url: '/gallery', text: 'Gallery wall' },
  { url: '#', text: 'Virtual tasting' },
  { url: '#', text: 'The Macallan' }
];

export const SideMenu = () => {
  const [show, setShow] = useState(false);

  const toggleSlideMenu = () => {
    setShow(prevShow => !prevShow);
  };

  const buttonClasses = `focus:outline-none opacity-40 hover:opacity-100 z-30 ${
    show && 'opacity-100'
  }`;

  const backgroundClasses = `fixed bg-transparent w-full h-full top-0 ${
    !show && 'hidden'
  }`;

  return (
    <Wrapper className="flex flex-row fixed z-20 left-0">
      <button className={buttonClasses} type="button" onClick={toggleSlideMenu}>
        <MenuIcon className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" />
      </button>
      <div className={backgroundClasses} onClick={toggleSlideMenu}></div>
      <Menu
        show={show}
        className="flex flex-col bg-white px-12 py-20 justify-center z-30 opacity-90"
      >
        {items.map(item => (
          <MenuItem key={item.text} item={item} />
        ))}
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 40%;
  top: 30%;
`;

const Menu = styled.div<{ show: boolean }>`
  margin-left: -10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  ${({ show }) =>
    show
      ? `
        transform: translate3d(0, 0, 0);
        transition: all 500ms cubic-bezier(0, 0.23, 0, 1) 150ms;`
      : `opacity: 0;
          transform: translate3d(-150%, 0, 0);
          transition: all 500ms cubic-bezier(1, 0, 0.775, 0.895) 300ms;`}
`;
