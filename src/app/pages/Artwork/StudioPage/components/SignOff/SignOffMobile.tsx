import styled from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  setFont?: Function;
  setFontSize?: Function;
};
export const SignOffMobile = ({ onTextChanged }: props) => {
  return (
    <div className="bg-white">
      <BoxWrapper className="m-auto p-12 border-t-1 border-solid border-gray-light border-b-4 border-gray-light border-solid text-sm">
        <textarea
          className="w-full opacity-0"
          onKeyUp={evt => onTextChanged(evt)}
        />
        <p className="font-alternate font-bold text-lg mb-4">
          Keyboard area to sign off artwork
        </p>
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
