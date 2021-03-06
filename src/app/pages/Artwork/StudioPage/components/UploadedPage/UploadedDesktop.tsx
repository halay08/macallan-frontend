import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import { socialIcons, buttonIcons } from './assets';
import { PerfectScrollbar } from 'app/components/ScrollBar';
import { UploadedTypes } from 'types';
import { useEffect, useRef } from 'react';

type props = {
  handleClick: Function;
  handlePostGallery: Function;
  handleViewGallery: Function;
  handleShareECard: Function;
};
export const UploadedDesktop = ({
  handleClick,
  handlePostGallery,
  handleViewGallery,
  handleShareECard
}: props) => {
  const ref = useRef<any>(null);
  const iconKeys = Object.keys(socialIcons);
  const buttonClicks = {
    PostGallery: handlePostGallery,
    ViewGallery: handleViewGallery,
    ShareECard: handleShareECard
  };

  useEffect(() => {
    if (ref.current == null) return;
    ref.current.updateScroll();
  }, []);

  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full">
      <div className="my-auto pb-16 px-16">
        <p className="text-center text-3xl">Share your artwork</p>
        <div className="mt-2">
          {Object.entries(buttonIcons).map(([name, icon]) => (
            <button
              key={name}
              className="w-full focus:outline-none select-none"
            >
              <img
                src={icon}
                className="w-9/12 m-auto"
                alt={name}
                onClick={() => buttonClicks[name]()}
              />
            </button>
          ))}
        </div>

        <PerfectScrollbar ref={ref} style={{ height: 'auto' }}>
          <div className="w-10/12 mx-auto flex flex-nowrap justify-around h-28">
            {iconKeys.map(icon => (
              <Button
                key={icon}
                className="p-1 focus:outline-none focus:shadow-md active:shadow-md select-none"
                onClick={() => handleClick(UploadedTypes[icon])}
              >
                <Icon src={socialIcons[icon]} width={70} />
              </Button>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

const Button = styled.button`
  height: fit-content;
`;
