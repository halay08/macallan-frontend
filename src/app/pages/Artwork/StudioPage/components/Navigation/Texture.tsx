import styled from 'styled-components/macro';
import { ReactComponent as Texture01Svg } from '../../assets/textures/svg/texture_01.svg';
import { ReactComponent as Texture02Svg } from '../../assets/textures/svg/texture_02.svg';
import { ReactComponent as Texture03Svg } from '../../assets/textures/svg/texture_03.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { setTexture } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';
import { ToolbarStatus } from 'types';

export const Texture = () => {
  const [toolbarStatus, setToolbarStatus] = useState(ToolbarStatus.SHOW);
  const [currentTexture, setCurrentTexture] = useState('');
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
      setCurrentTexture('');
      dispatch(setTexture({ texture: '' }));
    } else {
      setCurrentTexture(texture);
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
          <Texture01Svg
            className={`${
              currentTexture === 'texture_01.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 block`}
          />
        </Button>
        <Button
          className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture('texture_02.png')}
        >
          <Texture02Svg
            className={`${
              currentTexture === 'texture_02.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 block`}
          />
        </Button>
        <Button
          className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          onClick={() => pickTexture('texture_03.png')}
        >
          <Texture03Svg
            className={`${
              currentTexture === 'texture_03.png'
                ? 'border-2 border-solid border-primary'
                : 'border border-solid border-gray-light'
            } rounded-full w-5 h-5 block`}
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
