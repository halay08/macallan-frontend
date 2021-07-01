import styled from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  maxLength: number;
};
export const SignOffMobile = ({ onTextChanged, maxLength }: props) => {
  return (
    <div className="bg-white">
      <BoxWrapper className="pt-0 p-12 relative border-t-1 border-solid border-gray-light border-b-4 border-gray-light border-solid text-sm">
        <div className="flex flex-nowrap gap-4 h-28 relative">
          <div className="flex flex-row items-center justify-center text-gray-light absolute w-full h-full left-0 top 0 font-alternate">
            Tap to type a character here
          </div>
          <textarea
            maxLength={maxLength}
            className="w-full opacity-0"
            onKeyUp={evt => onTextChanged(evt)}
          />
        </div>
        <p>Font for sign off: Adobe Garamond Pro Regular</p>
        <p>Font Size: 15pt</p>
      </BoxWrapper>
    </div>
  );
};

const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
