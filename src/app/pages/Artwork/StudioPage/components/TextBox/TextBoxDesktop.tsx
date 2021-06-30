import styled from 'styled-components/macro';
import { ColorPicker, Texture } from '../Navigation';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useEffect, useState } from 'react';

type props = {
  onTextChanged: Function;
};

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '0123456789'.split('');

export const TextBoxDesktop = ({ onTextChanged }: props) => {
  const { texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );

  const [textureBg, setTextureBg] = useState();

  useEffect(() => {
    (async () => {
      const textureName = texture || 'texture_01_bg.png';
      const imported = (
        await import(`../../assets/textures/img/${textureName}`)
      ).default;

      setTextureBg(imported);
    })();
  }, [texture]);

  const renderCharacters = characters => {
    return (
      <Wrapper textureBg={textureBg} className="mb-6 text-5xl leading-tight">
        {characters.map(c => (
          <Button
            key={c}
            className="px-2 focus:outline-none focus:shadow-md active:shadow-md"
            value={c}
            onClick={() => onTextChanged(c)}
          >
            {c}
          </Button>
        ))}
      </Wrapper>
    );
  };

  return (
    <div className="flex flex-col items-stretch justify-between h-full">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 3: PERSONALISE WITH ALPHANUMERIC
        </strong>
      </div>
      <div className="m-auto mt-6 px-12 pb-20 font-Samuel">
        <div className="mb-6">
          <ColorPicker />
        </div>
        <div className="mb-6">
          <Texture />
        </div>
        {renderCharacters(uppercase)}
        {renderCharacters(lowercase)}
        {renderCharacters(numbers)}
      </div>
    </div>
  );
};

const Button = styled.button`
  height: fit-content;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div<{ textureBg: any }>`
  background: url(${({ textureBg }) => textureBg}) repeat center/25%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
