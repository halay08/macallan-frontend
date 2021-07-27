import styled from 'styled-components/macro';
import { Bottle } from '../Bottle';
import * as bottles from '../../assets/bottles';
import { BottleType } from 'types';

type props = {
  drawBottle: Function;
};
export const BottleBoxMobile = ({ drawBottle }: props) => {
  const bottleKeys = Object.keys(bottles);

  return (
    <Wrapper className="bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-2 font-serif">
          <strong className="font-medium text-tiny">
            STEP 4: ADD BOTTLE(S)
          </strong>
        </div>
        <div className="flex flex-nowrap flex-row items-center justify-center pl-4 pr-4 h-28 mb-2">
          {bottleKeys.map(bottle => (
            <Button
              className="p-4 focus:outline-none focus:shadow-md active:shadow-md"
              key={bottle}
              onClick={() => drawBottle(BottleType[bottle])}
            >
              <Bottle src={bottles[bottle]} />
            </Button>
          ))}
        </div>
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
