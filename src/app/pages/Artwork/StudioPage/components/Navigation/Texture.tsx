import styled from 'styled-components/macro';
import texture1bg from '../../assets/textures/img/texture_01_bg.png';
import texture2bg from '../../assets/textures/img/texture_02_bg.png';
import texture3bg from '../../assets/textures/img/texture_03_bg.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { setTexture } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarStatus } from 'types';
import { AppState } from 'redux/store';

export const Texture = () => {
  const [toolbarStatus, setToolbarStatus] = useState(ToolbarStatus.SHOW);
  const { texture: currentTexture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();

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

  return (
    <Wrapper
      className={`fixed z-50 right-0 top-48 flex flex-row items-center justify-center${
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
        <Button
          className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture('texture_01.png')}
        >
          <Texture01
            className={`${
              currentTexture === 'texture_01.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 inline-block`}
          />
        </Button>
        <Button
          className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture('texture_02.png')}
        >
          <Texture02
            className={`${
              currentTexture === 'texture_02.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 inline-block`}
          />
        </Button>
        <Button
          className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture('texture_03.png')}
        >
          <Texture03
            className={`${
              currentTexture === 'texture_03.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 inline-block`}
          />
        </Button>
      </Container>
    </Wrapper>
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
