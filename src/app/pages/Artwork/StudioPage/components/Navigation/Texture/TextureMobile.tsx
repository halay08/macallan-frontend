import styled from 'styled-components/macro';
import texture1bg from '../../../assets/textures/img/texture_01_bg.png';
import texture2bg from '../../../assets/textures/img/texture_02_bg.png';
import texture3bg from '../../../assets/textures/img/texture_03_bg.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { setTexture } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarStatus } from 'types';
import { AppState } from 'redux/store';
import { useResponsive } from 'utils/responsive';

export const TextureMobile = () => {
  const [toolbarStatus, setToolbarStatus] = useState(ToolbarStatus.SHOW);
  const { texture: currentTexture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const togglePicker = () => {
    setToolbarStatus(
      toolbarStatus === ToolbarStatus.SHOW
        ? ToolbarStatus.HIDE
        : ToolbarStatus.SHOW
    );
  };

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

  return isMobile ? (
    <Wrapper
      className={`absolute z-50 right-0 top-24 flex flex-row items-center justify-center${
        toolbarStatus === ToolbarStatus.HIDE ? ' w-0' : ''
      }`}
    >
      <ChevronLeftWrapper className="h-10 bg-white rounded-l-md flex flex-col items-center justify-center border border-solid border-gray-light border-r-0">
        <Button
          onClick={() => togglePicker()}
          className="focus:outline-none h-10"
        >
          {toolbarStatus === ToolbarStatus.SHOW && (
            <ChevronRightIcon className="w-6" />
          )}
          {toolbarStatus === ToolbarStatus.HIDE && (
            <ChevronLeftIcon className="w-6" />
          )}
        </Button>
      </ChevronLeftWrapper>
      <Container
        className={`m-auto border border-solid border-gray-light transition-all bg-white rounded-l-md${
          toolbarStatus === ToolbarStatus.HIDE ? ' p-0' : ' p-2 pb-0'
        }`}
      >
        {textureIcons.map(({ name, Component }) => (
          <Button
            key={name}
            className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
            onClick={() => pickTexture(name)}
          >
            <Component
              className={`${
                currentTexture === name
                  ? 'border-3 border-solid border-primary-dark'
                  : 'border border-solid border-gray-light'
              } rounded-full w-5 h-5 inline-block`}
            />
          </Button>
        ))}
      </Container>
    </Wrapper>
  ) : (
    <Container className="flex justify-center">
      {textureIcons.map(({ name, Component }) => (
        <Button
          key={name}
          className="group w-8 h-8 mx-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture(name)}
        >
          <Component
            className={`${
              currentTexture === name
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-8 h-8 inline-block`}
          />
        </Button>
      ))}
    </Container>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;
const Button = styled.button``;
const ChevronLeftWrapper = styled.div``;
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
