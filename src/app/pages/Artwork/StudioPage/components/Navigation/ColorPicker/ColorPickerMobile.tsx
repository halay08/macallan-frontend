import styled from 'styled-components/macro';
import { pickerColors } from 'config/studio';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { setColor } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarStatus } from 'types';
import { AppState } from 'redux/store';

export const ColorPickerMobile = () => {
  const [toolbarStatus, setToolbarStatus] = useState(ToolbarStatus.SHOW);
  const { color: currentColor } = useSelector<AppState, AppState['studio']>(
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

  const pickColor = (color: string) => {
    if (color === currentColor) {
      dispatch(setColor({ color: '' }));
    } else {
      dispatch(setColor({ color }));
    }
  };

  return (
    <Wrapper
      className={`absolute z-50 left-0 top-4 flex flex-row items-center justify-center${
        toolbarStatus === ToolbarStatus.HIDE ? ' w-0' : ''
      }`}
    >
      <Container
        className={`m-auto border border-solid border-gray-light transition-all bg-white rounded-r-md${
          toolbarStatus === ToolbarStatus.HIDE ? ' p-0' : ' p-2 pb-0'
        }`}
      >
        {pickerColors.map(color => (
          <Button
            key={color}
            onClick={() => pickColor(color)}
            className="group w-5 h-5 mb-2 block focus:outline-none active:outline-none"
          >
            <span
              className={`${
                currentColor === color
                  ? 'border-3 border-solid border-primary'
                  : 'border border-solid border-gray-light'
              } rounded-full w-5 h-5 block`}
              style={{ backgroundColor: color }}
            ></span>
          </Button>
        ))}
      </Container>
      <ChevronLeftWrapper className="h-10 bg-white rounded-r-md flex flex-col items-center justify-center border border-solid border-gray-light border-l-0">
        <Button
          onClick={() => togglePicker()}
          className="focus:outline-none h-10"
        >
          {toolbarStatus === ToolbarStatus.SHOW && (
            <ChevronLeftIcon className="w-6" />
          )}
          {toolbarStatus === ToolbarStatus.HIDE && (
            <ChevronRightIcon className="w-6" />
          )}
        </Button>
      </ChevronLeftWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;
const Button = styled.button``;
const ChevronLeftWrapper = styled.div``;
