import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import * as icons from './assets';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { UploadedTypes } from 'types';

type props = {
  handleClick: Function;
};
export const UploadedMobile = ({ handleClick }: props) => {
  const iconKeys = Object.keys(icons);

  return (
    <div className="bg-white">
      <BoxWrapper className="m-auto">
        <p className="mt-16 mb-6 text-center text-lg">
          Thank you for being part of
          <br />
          The Macallan Create Your Own
        </p>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className="flex flex-nowrap flex-row justify-between px-8 h-24">
            {iconKeys.map(icon => (
              <Button
                key={icon}
                className="p-1 mr-5 focus:outline-none focus:shadow-md active:shadow-md"
                onClick={() => handleClick(UploadedTypes[icon])}
              >
                <Icon src={icons[icon]} />
              </Button>
            ))}
          </div>
        </PerfectScrollbar>
      </BoxWrapper>
    </div>
  );
};

const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
const Button = styled.button`
  height: fit-content;
`;
