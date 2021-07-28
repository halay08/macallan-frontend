import styled from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  maxLength: number;
};
export const SignOffMobile = ({ onTextChanged, maxLength }: props) => {
  return (
    <div className="bg-white">
      <BoxWrapper className="pt-7 p-0 border-t-1 border-solid border-gray-light text-sm">
        <div className="grid text-center mb-2 font-serif">
          <strong className="font-medium text-tiny">
            STEP 5: SIGN OFF ARTWORK
          </strong>
        </div>
        <div className="flex flex-nowrap gap-4 h-28 relative mb-4">
          <Editor
            maxLength={maxLength}
            className="w-3/4 mx-auto p-6 border border-solid"
            onKeyUp={evt => onTextChanged(evt)}
            placeholder="Tap to type a character here"
          />
        </div>
      </BoxWrapper>
    </div>
  );
};

const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;

const Editor = styled.textarea`
  --tw-border-opacity: 1;
  border-color: #8e8e8d;
`;
