import styled from 'styled-components/macro';
import { pickerColors } from 'config/studio';
import { setColor } from 'redux/actions/studio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';

export const ColorPickerDesktop = () => {
  const { color: currentColor } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();

  const pickColor = (color: string) => {
    if (color === currentColor) {
      dispatch(setColor({ color: '' }));
    } else {
      dispatch(setColor({ color }));
    }
  };

  return (
    <Container className="flex justify-center">
      {pickerColors.map(color => (
        <Button
          key={color}
          onClick={() => pickColor(color)}
          className="group mx-2 block focus:outline-none active:outline-none"
        >
          <span
            className={`${
              currentColor === color
                ? 'border-4 border-solid border-primary-dark'
                : 'border border-solid border-gray-light'
            } rounded-full w-10 h-10 block`}
            style={{ backgroundColor: color }}
          ></span>
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div``;
const Button = styled.button``;
