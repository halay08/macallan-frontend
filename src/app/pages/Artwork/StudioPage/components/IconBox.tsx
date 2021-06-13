import styled from 'styled-components/macro';
import { Icon } from './Icon';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Konva from 'konva';
import * as icons from '../assets/icons';
import { IconType } from 'types';
import {
  createImageNode,
  getCanvas,
  getImageObjectPos,
  onNodeAction
} from 'app/helpers';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const IconBox = () => {
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [width] = useState(60);
  const [height] = useState(60);
  const dispatch = useDispatch();

  const drawIcon = (icon: string) => {
    const canvas = getCanvas(stage, { width, height });
    const ctx = canvas.getContext('2d');
    const [layer] = stage.getLayers();

    const iconImage = new window.Image();
    iconImage.onload = () => {
      if (ctx) {
        dispatch(fetchStart());
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(iconImage, 0, 0, width, height);

        const [x, y] = getImageObjectPos(format);

        const node = createImageNode(canvas, 1, { x, y });
        node.setAttr('name', 'icon');
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
    iconImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    iconImage.src = `/assets/icons/svg/${icon}`;
  };

  const iconKeys = Object.keys(icons);
  const half = Math.ceil(iconKeys.length / 2);
  const firstHalf = iconKeys.slice(0, half);
  const secondHalf = iconKeys.slice(-half + 1);

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">STEP 4: ADD ICONS</strong>
        </div>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className="flex flex-nowrap flex-row justify-between pl-4 pr-4 h-28">
            {firstHalf.map((icon, index) => (
              <div key={icon}>
                <Button
                  className="p-1 mr-5 focus:outline-none focus:shadow-md active:shadow-md"
                  onClick={() => drawIcon(IconType[icon])}
                >
                  <Icon src={icons[icon]} />
                </Button>
                {secondHalf[index] && (
                  <Button
                    className="p-1 focus:outline-none focus:shadow-md active:shadow-md"
                    onClick={() => drawIcon(IconType[secondHalf[index]])}
                  >
                    <Icon src={icons[secondHalf[index]]} />
                  </Button>
                )}
                {secondHalf[index] === undefined && <div />}
              </div>
            ))}
          </div>
        </PerfectScrollbar>
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
