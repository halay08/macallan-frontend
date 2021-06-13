import styled from 'styled-components/macro';
import { Bottle } from './Bottle';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Konva from 'konva';
import * as bottles from '../assets/bottles';
import { BottleType } from 'types';
import {
  createImageNode,
  getCanvas,
  getImageObjectPos,
  onNodeAction
} from 'app/helpers';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const BottleBox = () => {
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const [width] = useState(55);
  const [height] = useState(206);
  const dispatch = useDispatch();

  const drawBottle = (bottle: string) => {
    const canvas = getCanvas(stage, { width, height });
    const ctx = canvas.getContext('2d');
    const [layer] = stage.getLayers();

    dispatch(fetchStart());
    const bottleImage = new window.Image();
    bottleImage.onload = () => {
      if (ctx) {
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(bottleImage, 0, 0, width, height);

        const [x, y] = getImageObjectPos(format);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'bottle');
        layer.add(node);

        // Select current node by default
        const [transformer] = stage.find('Transformer') as Konva.Transformer[];
        transformer.setAttr('rotateEnabled', false);
        transformer.nodes([node]);

        // Set events
        onNodeAction(node);
      }
      dispatch(fetchSuccess());
    };
    bottleImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    bottleImage.src = `/assets/bottles/${bottle}`;
  };

  const bottleKeys = Object.keys(bottles);

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light border-b-4 border-gray-light border-solid">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">STEP 4: ADD BOTTLE</strong>
        </div>
        <div className="flex flex-nowrap flex-row items-center justify-center pl-4 pr-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll">
          {bottleKeys.map(bottle => (
            <Button
              className="p-4 focus:outline-none focus:shadow-md active:shadow-md"
              key={bottle}
              onClick={() => drawBottle(BottleType[bottle])}
            >
              <Bottle src={bottles[bottle]} />
            </Button>
          ))}
        </div>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  bottom: 85px;
`;
const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
const Button = styled.button`
  height: fit-content;
`;
