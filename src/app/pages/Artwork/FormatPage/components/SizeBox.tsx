import styled from 'styled-components/macro';
import { StageSize } from 'types/artwork/studio';
import { useLocalStorage } from 'utils/localStorage';
import { useHistory } from 'react-router-dom';

export const SizeBox = () => {
  const history = useHistory();
  const [, setStageSize] = useLocalStorage('stageSize', 'square');

  const storeStageSize = (size: StageSize) => {
    setStageSize(size);
    history.push('/artwork/studio/shape');
  };

  return (
    <Wrapper className="p-7 border-t-1 border-solid border-gray-light border-b-4 border-gray-light border-solid fixed">
      <BoxWrapper className="m-auto">
        <div className="grid text-center mb-8 font-serif">
          <strong className="font-medium text-tiny">
            STEP 1: CHOOSE FORMAT
          </strong>
        </div>
        <div className="grid grid-cols-3 items-end text-center">
          <div className="group">
            <Square
              onClick={() => storeStageSize(StageSize.SQUARE)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Square>
            <span className="m-2 block group-hover:text-primary">Square</span>
          </div>
          <div className="group">
            <Mobile
              onClick={() => storeStageSize(StageSize.MOBILE)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Mobile>
            <span className="m-2 block group-hover:text-primary">9:16</span>
          </div>
          <div className="group">
            <Desktop
              onClick={() => storeStageSize(StageSize.DESKTOP)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Desktop>
            <span className="m-2 block group-hover:text-primary">16:9</span>
          </div>
        </div>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
  width: 100%;
  bottom: 85px;
`;
const BoxWrapper = styled.div`
  max-width: 325px;
`;
const Square = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid;
`;
const Mobile = styled.button`
  width: 45px;
  height: 80px;
  border: 1px solid;
`;
const Desktop = styled.button`
  width: 80px;
  height: 45px;
  border: 1px solid;
`;
