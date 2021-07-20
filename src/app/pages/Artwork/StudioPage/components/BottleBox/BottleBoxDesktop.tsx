import styled from 'styled-components/macro';
import { Bottle } from '../Bottle';
import * as bottles from '../../assets/bottles';
import { BottleType } from 'types';

type props = {
  drawBottle: Function;
};
export const BottleBoxDesktop = ({ drawBottle }: props) => {
  const bottleKeys = Object.keys(bottles);

  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full pb-20">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 4: ADD BOTTLE(S)
        </strong>
      </div>
      <div className="flex flex-nowrap flex-row items-center justify-around my-auto px-36 my-auto">
        {bottleKeys.map(bottle => (
          <Button
            className="p-4 focus:outline-none focus:shadow-md active:shadow-md"
            key={bottle}
            onClick={() => drawBottle(BottleType[bottle])}
          >
            <Bottle src={bottles[bottle]} width={70} />
          </Button>
        ))}
      </div>
    </div>
  );
};

const Button = styled.button`
  height: fit-content;
`;
