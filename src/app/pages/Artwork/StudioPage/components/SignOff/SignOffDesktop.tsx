import styled, { css } from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  maxLength: number;
};
export const SignOffDesktop = ({ onTextChanged, maxLength }: props) => {
  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 6: SIGN OFF ARTWORK
        </strong>
      </div>
      <div className="my-auto p-24 text-lg">
        <Editor
          maxLength={maxLength}
          className="h-48 w-full font-AGaramondPro-bold border border-solid mb-4 p-4"
          onChange={e => onTextChanged(e)}
        />
        <Label className="border border-solid bg-gray-light p-2">Font</Label>
        <Input className="border border-solid mr-8 p-2">
          Adobe Garamond Pro Regular
        </Input>
        <Label className="border border-solid bg-gray-light p-2">
          Font Size
        </Label>
        <Input className="border border-solid p-2">15pt</Input>
      </div>
    </div>
  );
};

const BorderGray = css`
  --tw-border-opacity: 1;
  border-color: #8e8e8d;
`;

const Editor = styled.textarea`
  ${BorderGray}
`;

const Label = styled.span`
  ${BorderGray}
  background-color: #A4A4A3;
`;

const Input = styled.span`
  ${BorderGray}
`;
