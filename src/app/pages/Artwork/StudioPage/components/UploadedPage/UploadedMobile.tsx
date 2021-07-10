import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import { socialIcons, buttonIcons } from './assets';
import { PerfectScrollbar } from 'app/components/ScrollBar';
import { UploadedTypes } from 'types';

type props = {
  handleClick: Function;
  handlePostGallery: Function;
  handleViewGallery: Function;
  handleShareECard: Function;
};

export const UploadedMobile = ({
  handleClick,
  handlePostGallery,
  handleViewGallery,
  handleShareECard
}: props) => {
  const iconKeys = Object.keys(socialIcons);
  const buttonClicks = {
    PostGallery: handlePostGallery,
    ViewGallery: handleViewGallery,
    ShareECard: handleShareECard
  };

  return (
    <div className="bg-white">
      <BoxWrapper className="m-auto">
        <p className="mb-2 text-center text-xl">
          Share your artwork and keep on exploring
        </p>
        <div className="mb-6">
          {Object.entries(buttonIcons).map(([name, icon]) => (
            <button key={name} className="focus:outline-none -mb-3">
              <img
                src={icon}
                className="w-10/12 m-auto"
                alt={name}
                onClick={buttonClicks[name]}
              />
            </button>
          ))}
        </div>
        <PerfectScrollbar>
          <div className="flex flex-nowrap flex-row justify-between px-8 h-24">
            {iconKeys.map(icon => (
              <Button
                key={icon}
                className=" focus:outline-none focus:shadow-md active:shadow-md"
                onClick={() => handleClick(UploadedTypes[icon])}
              >
                <Icon src={socialIcons[icon]} width={48} />
              </Button>
            ))}
          </div>
        </PerfectScrollbar>
      </BoxWrapper>
    </div>
  );
};

const BoxWrapper = styled.div``;
const Button = styled.button`
  height: fit-content;
`;
