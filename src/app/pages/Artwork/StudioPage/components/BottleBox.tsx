import styled from 'styled-components/macro';
import { Bottle } from './Bottle';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import * as bottles from '../assets/bottles';
import { BottleType } from 'types';
import { DEFAULT_TRANSFORMER_OPT } from 'config';
import {
  createImageNode,
  getCanvas,
  getImageObjectPos,
  selectObject
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
  const [layer, setLayer] = useState(new Konva.Layer());
  const [transformer, setTransformer] = useState(new Konva.Transformer());
  const dispatch = useDispatch();

  const drawBottle = (bottle: string) => {
    const canvas = getCanvas(stage, { width, height });
    const ctx = canvas.getContext('2d');

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
        layer.add(node);

        // by default select all shapes
        transformer.nodes([node]);
        selectObject(stage, transformer);
      }
      dispatch(fetchSuccess());
    };
    bottleImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    bottleImage.src = `/assets/bottles/${bottle}`;
    console.log(bottleImage.src);
  };

  useEffect(() => {
    if (stage.name !== undefined) {
      var initiatingLayer = new Konva.Layer();
      var initiatingTransformer = new Konva.Transformer(
        DEFAULT_TRANSFORMER_OPT
      );

      // Add layer to stage
      stage.add(initiatingLayer);

      // Add transformer to layer
      initiatingLayer.add(initiatingTransformer);

      setLayer(initiatingLayer as any);
      setTransformer(initiatingTransformer as any);
    }
  }, [stage]);

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
