import styled from 'styled-components/macro';

type props = {
  onTextChanged: Function;
  textureBg: string;
};

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '0123456789'.split('');

export const TextBox = ({ onTextChanged, textureBg }: props) => {
  const renderCharacters = characters => {
    return (
      <RowWrapper className="mb-4 text-xl">
        {characters.map(c => (
          <Button
            key={c}
            textureBg={textureBg}
            className="px-2 focus:outline-none focus:shadow-md active:shadow-md"
            onClick={() => onTextChanged(c)}
          >
            {c}
          </Button>
        ))}
      </RowWrapper>
    );
  };

  return (
    <Wrapper className="bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 3: PERSONALISE WITH ALPHANUMERIC
          </strong>
        </div>
        <div className="flex flex-col relative px-8">
          {renderCharacters(uppercase)}
          {renderCharacters(lowercase)}
          {renderCharacters(numbers)}
        </div>
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

const Button = styled.span<{ textureBg: any }>`
  height: fit-content;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-block;
  background: url(${({ textureBg }) => textureBg}) repeat center/cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const RowWrapper = styled.div``;
