import styled from 'styled-components/macro';
import texture1bg from '../../assets/textures/img/texture_01_bg.png';
import texture2bg from '../../assets/textures/img/texture_02_bg.png';
import texture3bg from '../../assets/textures/img/texture_03_bg.png';
import { setTexture } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';

export const TextureDesktop = () => {
  const { texture: currentTexture = 'texture_01_bg.png' } = useSelector<
    AppState,
    AppState['studio']
  >(({ studio }) => studio);
  const dispatch = useDispatch();

  const pickTexture = (texture: string) => {
    dispatch(setTexture({ texture }));
  };

  return (
    <div className="flex flex-row items-center justify-around px-36 mb-8">
      <Button
        className="group focus:outline-none active:outline-none"
        onClick={() => pickTexture('texture_01.png')}
      >
        <Texture01
          className={`${
            currentTexture === 'texture_01.png'
              ? 'border-2 border-solid border-primary'
              : 'border border-solid border-gray-light'
          } rounded-full w-12 h-12 inline-block`}
        />
      </Button>
      <Button
        className="group focus:outline-none active:outline-none"
        onClick={() => pickTexture('texture_02.png')}
      >
        <Texture02
          className={`${
            currentTexture === 'texture_02.png'
              ? 'border-2 border-solid border-primary'
              : 'border border-solid border-gray-light'
          } rounded-full w-12 h-12 inline-block`}
        />
      </Button>
      <Button
        className="group focus:outline-none active:outline-none"
        onClick={() => pickTexture('texture_03.png')}
      >
        <Texture03
          className={`${
            currentTexture === 'texture_03.png'
              ? 'border-2 border-solid border-primary'
              : 'border border-solid border-gray-light'
          } rounded-full w-12 h-12 inline-block`}
        />
      </Button>
    </div>
  );
};

const Button = styled.button``;
const Texture01 = styled.span`
  background: url(${texture1bg}) center center no-repeat;
  background-size: 500%;
`;
const Texture02 = styled.span`
  background: url(${texture2bg}) center center no-repeat;
  background-size: 300%;
`;
const Texture03 = styled.span`
  background: url(${texture3bg}) center center no-repeat;
`;
