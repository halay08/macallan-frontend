import styled from 'styled-components/macro';
import { Shape } from '../Shape';
import * as shapes from '../../assets/shapes';
import { ShapeType } from 'types';
import { PerfectScrollbar } from 'app/components/ScrollBar';

type props = {
  drawTexture: Function;
};
export const ShapeBoxMobile = ({ drawTexture }: props) => {
  return (
    <Wrapper className="bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 2: CHOOSE SHAPE
          </strong>
        </div>
        <PerfectScrollbar>
          <div className="flex flex-nowrap h-28" style={{ width: '684px' }}>
            {Object.keys(shapes).map(shape => (
              <Button
                className="p-2 focus:outline-none focus:shadow-md active:shadow-md"
                key={shape}
                onClick={() => drawTexture(ShapeType[shape])}
              >
                <Shape src={shapes[shape]} />
              </Button>
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
