import { SET_STAGE } from 'types/actions/studio.action';
import Konva from 'konva';
import { AppActions } from 'types/index';

export const setStage = (stage: Konva.Stage): AppActions => ({
  type: SET_STAGE,
  payload: stage
});
