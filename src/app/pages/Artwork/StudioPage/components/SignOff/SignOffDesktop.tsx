import styled, { css } from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  maxLength: number;
};
export const SignOffDesktop = ({ onTextChanged, maxLength }: props) => {
  return (
    <div className="flex flex-col items-stretch justify-between w-full h-full pb-20">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 5: SIGN OFF ARTWORK
        </strong>
      </div>
      <div className="my-auto px-24 text-lg">
        <label>Created by</label>
        <Editor
          maxLength={maxLength}
          className="h-48 w-full font-AGaramondPro-bold border border-solid mb-4 p-4"
          onChange={e => onTextChanged(e)}
        />
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
