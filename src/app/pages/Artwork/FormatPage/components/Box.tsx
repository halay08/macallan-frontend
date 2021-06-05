import styled from 'styled-components/macro';

export const Box = () => {
  return (
    <Wrapper className="p-7 border-t-1 border-solid border-gray-light">
      <BoxWrapper className="m-auto">
        <div className="grid text-center mb-8 font-serif">
          <strong className="font-semibold">STEP 1: CHOOSE FORMAT</strong>
        </div>
        <div className="grid grid-cols-3 items-end text-center">
          <div className="group">
            <Square className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"></Square>
            <span className="m-2 block group-hover:text-primary">Square</span>
          </div>
          <div className="group">
            <Mobile className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"></Mobile>
            <span className="m-2 block group-hover:text-primary">9:16</span>
          </div>
          <div className="group">
            <Desktop className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"></Desktop>
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
  position: absolute;
  bottom: 130px;
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
