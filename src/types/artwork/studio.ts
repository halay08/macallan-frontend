enum SceneType {
  SHAPE = 'shape',
  TEXT = 'text',
  ICON = 'icon',
  BOTTLE = 'bottle'
}

enum ShapeType {
  HALF_CIRCLE = 'half-circle.svg',
  CIRCLE = 'circle.svg',
  TRIANGLE = 'triangle.svg',
  SQUARE = 'square.svg',
  CUT_SQUARE = 'cut-square.svg',
  PENTAGON = 'pentagon.svg',
  HEXAGON = 'hexagon.svg',
  HEPTAGON = 'heptagon.vsg',
  OCTAGON = 'octagon.svg'
}

enum StageSize {
  SQUARE = 'square',
  MOBILE = 'mobile',
  DESKTOP = 'desktop'
}

type ISvgShapeAttribute = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  name: string;
  draggable: boolean;
};

export type { ISvgShapeAttribute };

export { SceneType, ShapeType, StageSize };
