import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import * as icons from '../../assets/icons';
import { IconType } from 'types';

type props = {
  drawIcon: Function;
};
export const IconBoxDesktop = ({ drawIcon }: props) => {
  const iconKeys = Object.keys(icons);

  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full pb-20">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 4: ADD ICONS
        </strong>
      </div>
      <div className="m-auto">
        <div className="grid grid-cols-7 gap 5">
          {iconKeys.map(icon => (
            <Button
              key={icon}
              className="p-1 mr-5 focus:outline-none focus:shadow-md active:shadow-md"
              onClick={() => drawIcon(IconType[icon])}
            >
              <Icon src={icons[icon]} width={50} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  height: fit-content;
`;
