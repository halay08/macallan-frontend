import styled from 'styled-components/macro';
import { Icon } from '../Icon';
import * as icons from '../../assets/icons';
import { IconType } from 'types';
import { PerfectScrollbar } from 'app/components/ScrollBar';

type props = {
  drawIcon: Function;
};
export const IconBoxMobile = ({ drawIcon }: props) => {
  const iconKeys = Object.keys(icons);
  const half = Math.ceil(iconKeys.length / 2);
  const firstHalf = iconKeys.slice(0, half);
  const secondHalf = iconKeys.slice(-half);

  return (
    <Wrapper className="bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">STEP 3: ADD ICON(S)</strong>
        </div>
        <PerfectScrollbar>
          <div className="flex flex-nowrap flex-row justify-between pl-2 pr-2 h-28">
            {firstHalf.map((icon, index) => (
              <div className="flex flex-col items-center px-1" key={icon}>
                <Button
                  className="p-1 focus:outline-none focus:shadow-md active:shadow-md"
                  onClick={() => drawIcon(IconType[icon])}
                >
                  <Icon src={icons[icon]} />
                </Button>
                {secondHalf[index] && (
                  <Button
                    className="p-1 focus:outline-none focus:shadow-md active:shadow-md"
                    onClick={() => drawIcon(IconType[secondHalf[index]])}
                  >
                    <Icon src={icons[secondHalf[index]]} />
                  </Button>
                )}
                {secondHalf[index] === undefined && <div />}
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  bottom: 90px;
`;
const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
const Button = styled.button`
  height: fit-content;
`;
