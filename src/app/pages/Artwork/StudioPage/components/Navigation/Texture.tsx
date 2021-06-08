import styled from 'styled-components/macro';
import { ReactComponent as Texture1Svg } from '../../assets/textures/texture-1.svg';
import { ReactComponent as Texture2Svg } from '../../assets/textures/texture-2.svg';
import { ReactComponent as Texture3Svg } from '../../assets/textures/texture-3.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { setTexture } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';

enum ToolbarStatus {
  SHOW = 'show',
  HIDE = 'hide'
}

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
    setCurrentTexture(texture);
    dispatch(setTexture({ texture }));
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
          className={`${
            currentTexture === 'texture-1.svg' ? 'active ' : ''
          } group w-5 h-5 mb-2 block`}
          onClick={() => pickTexture('texture-1.jpg')}
        >
          <Texture1Svg className="rounded-full w-5 h-5 block border border-solid border-gray-light" />
        </Button>
        <Button
          className={`${
            currentTexture === 'texture-2.svg' ? 'active ' : ''
          } group w-5 h-5 mb-2 block`}
          onClick={() => pickTexture('texture-2.jpg')}
        >
          <Texture2Svg className="rounded-full w-5 h-5 block border border-solid border-gray-light" />
        </Button>
        <Button
          className={`${
            currentTexture === 'texture-3.svg' ? 'active ' : ''
          } group w-5 h-5 mb-2 block`}
          onClick={() => pickTexture('texture-3.jpg')}
        >
          <Texture3Svg className="rounded-full w-5 h-5 block border border-solid border-gray-light" />
        </Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;
const Button = styled.button``;
const ChevronLeftWrapper = styled.div``;
