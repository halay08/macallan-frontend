import styled from 'styled-components/macro';
import texture1bg from '../../../assets/textures/img/texture_01_bg.png';
import texture2bg from '../../../assets/textures/img/texture_02_bg.png';
import texture3bg from '../../../assets/textures/img/texture_03_bg.png';
import { setTexture } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';

export const TextureDesktop = () => {
  const { texture: currentTexture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();

  const pickTexture = (texture: string) => {
    if (texture === currentTexture) {
      dispatch(setTexture({ texture: '' }));
    } else {
      dispatch(setTexture({ texture }));
    }
  };

  const textureIcons = [
    { name: 'texture_01.png', Component: Texture01 },
    { name: 'texture_02.png', Component: Texture02 },
    { name: 'texture_03.png', Component: Texture03 }
  ];

  return (
    <Container className="flex justify-center">
      {textureIcons.map(({ name, Component }) => (
        <Button
          key={name}
          className="group mx-4 block focus:outline-none active:outline-none"
          onClick={() => pickTexture(name)}
        >
          <Component
            className={`${
              currentTexture === name
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-12 h-12 inline-block`}
          />
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div``;
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
