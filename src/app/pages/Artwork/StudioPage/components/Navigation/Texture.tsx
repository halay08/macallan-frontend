import styled from 'styled-components/macro';
import { ReactComponent as Texture1Svg } from '../../assets/textture-1.svg';
import { ReactComponent as Texture2Svg } from '../../assets/textture-2.svg';
import { ReactComponent as Texture3Svg } from '../../assets/textture-3.svg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

enum ToolbarStatus {
  SHOW = 'show',
  HIDE = 'hide'
}

export const Texture = () => {
  const [toolbarStatus, setToolbarStatus] = useState(ToolbarStatus.SHOW);

  const togglePicker = () => {
    setToolbarStatus(
      toolbarStatus === ToolbarStatus.SHOW
        ? ToolbarStatus.HIDE
        : ToolbarStatus.SHOW
    );
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
        <Texture1Svg className="rounded-full w-5 h-5 block mb-2 border border-solid border-gray-light" />
        <Texture2Svg className="rounded-full w-5 h-5 block mb-2 border border-solid border-gray-light" />
        <Texture3Svg className="rounded-full w-5 h-5 block mb-2 border border-solid border-gray-light" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;
const Button = styled.button``;
const ChevronLeftWrapper = styled.div``;
