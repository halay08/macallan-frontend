enum StageType {
  SHAPE = 'shape',
  TEXT = 'text',
  ICON = 'icon',
  BOTTLE = 'bottle'
}

enum ShapeType {
  HALF_CIRCLE = 'HalfCircle',
  CIRCLE = 'Circle',
  TRIANGLE = 'Triangle',
  SQUARE = 'Square',
  CUT_SQUARE = 'CutSquare',
  PENTAGON = 'Pentagon',
  HEXAGON = 'Hexagon',
  HEPTAGON = 'Heptagon',
  OCTAGON = 'Octagon'
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

export { StageType, ShapeType, StageSize };
