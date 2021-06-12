import Konva from 'konva';

export const pickerColors = [
  '#CC3A3A',
  '#FFC34A',
  '#1962AE',
  '#4CA58A',
  '#F5918A',
  '#02B1CD',
  '#DBDAD7',
  '#000000',
  '#FFFFFF'
];

export const defaultTransformerConfig: Konva.TransformerConfig = {
  resizeEnabled: true,
  rotateEnabled: false,
  anchorStrokeWidth: 2,
  keepRatio: true,
  enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
};

export const DEFAULT_COLOR = '#DBDAD7';
