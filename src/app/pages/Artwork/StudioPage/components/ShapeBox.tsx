import styled from 'styled-components/macro';
import { Shape } from 'app/components/Shape';
import { ShapeType } from 'types/artwork/studio';

export const ShapeBox = () => {
  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 2: CHOOSE SHAPE
          </strong>
        </div>
        <div className="flex flex-nowrap gap-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll">
          {Object.values(ShapeType).map(shape => (
            <Shape key={shape} icon={shape} />
          ))}
        </div>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  bottom: 85px;
`;
const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
