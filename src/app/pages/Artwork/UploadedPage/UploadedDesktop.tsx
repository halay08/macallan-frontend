import styled from 'styled-components/macro';
import { Icon } from '../StudioPage/components/Icon';
import * as icons from './assets';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { UploadedTypes } from 'types';

type props = {
  handleClick: Function;
};
export const UploadedDesktop = ({ handleClick }: props) => {
  const iconKeys = Object.keys(icons);

  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 7: READY TO UPLOAD
        </strong>
      </div>
      <div className="my-auto p-16">
        <p className="mb-16 text-center text-3xl">
          Thank you foe being part of
          <br />
          The Macallan Create Your Own
        </p>
        <PerfectScrollbar
          options={{ suppressScrollY: true }}
          style={{ height: 'auto' }}
        >
          <div className="flex flex-nowrap flex-row justify-between pl-4 pr-4 h-28">
            {iconKeys.map(icon => (
              <Button
                key={icon}
                className="p-1 mr-5 focus:outline-none focus:shadow-md active:shadow-md"
                onClick={() => handleClick(UploadedTypes[icon])}
              >
                <Icon src={icons[icon]} width={70} />
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
