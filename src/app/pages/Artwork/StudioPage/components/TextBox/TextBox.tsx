import styled from 'styled-components/macro';

type props = {
  onTextChanged: Function;
};

export const TextBox = ({ onTextChanged }: props) => {
  const onKeyUp = evt => {
    const text = evt.target.value;

    onTextChanged(text);

    evt.target.value = '';
    evt.target.focus();
  };

  return (
    <Wrapper className="bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 3: PERSONALISE WITH ALPHANUMERIC
          </strong>
        </div>
        <div className="flex flex-nowrap gap-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll relative">
          <div className="flex flex-row items-center justify-center text-gray-light absolute w-full h-full left-0 top 0 font-alternate">
            Tap to type a character here
          </div>
          <TextField
            className="w-screen opacity-0"
            maxLength={1}
            onKeyUp={onKeyUp}
          />
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
const TextField = styled.textarea``;
