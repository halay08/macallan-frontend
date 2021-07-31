import styled from 'styled-components/macro';
import { StageFormat } from 'types/artwork/studio';
import { useEffect } from 'react';
import Konva from 'konva';
import { setStage } from 'redux/actions/studio';
import { useDispatch } from 'react-redux';
import { calcStageResolution } from '../../helpers';
import { onStageDelete, onStageTap } from 'app/helpers';

type StageFrameProps = {
  format: StageFormat;
  hide?: Boolean;
};

export const StageFrameDesktop = ({
  format,
  hide
}: StageFrameProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { stageWidth, stageHeight } = calcStageResolution(format);

    const stage = new Konva.Stage({
      container: 'stageContainer',
      width: stageWidth,
      height: stageHeight,
      name: 'studio'
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const background = new Konva.Rect({
      x: 0,
      y: 0,
      width: stage.width(),
      height: stage.height(),
      fill: '#fff',
      // remove background from hit graph for better perf
      // because we don't need any events on the background
      listening: false
    });
    layer.add(background);

    onStageTap(stage);
    onStageDelete(stage);

    dispatch(setStage({ stage, color: '', texture: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format]);

  return (
    <Wrapper
      className={
        'flex flex-row items-start justify-center relative max-h-full' +
        (hide ? ' hidden' : '')
      }
    >
      <div className="relative">
        <StageContainer
          id="stageContainer"
          className="flex flex-row items-center justify-center border-2 border-solid border-gray-light z-10"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const StageContainer = styled.div``;
