enum SceneType {
  SHAPE = 'shape',
  ICON = 'icon',
  BOTTLE = 'bottle',
  SIGN_OFF = 'signOff',
  THANK_YOU = 'thankyou',
  UPLOAD = 'upload'
}

enum ShapeType {
  HalfCircle = 'half_circle.svg',
  Circle = 'circle.svg',
  Triangle = 'triangle.svg',
  Square = 'square.svg',
  CutSquare = 'cut_square.svg',
  Pentagon = 'pentagon.svg',
  Hexagon = 'hexagon.svg',
  Heptagon = 'heptagon.svg',
  Octagon = 'octagon.svg'
}

enum BottleType {
  Bottle01 = 'bottle_01.png',
  Bottle02 = 'bottle_02.png',
  Bottle03 = 'bottle_03.png'
}

enum IconType {
  Icon01 = 'icon_01.png',
  Icon02 = 'icon_02.png',
  Icon03 = 'icon_03.png',
  Icon04 = 'icon_04.png',
  Icon05 = 'icon_05.png',
  Icon06 = 'icon_06.png',
  Icon07 = 'icon_07.png',
  Icon08 = 'icon_08.png',
  Icon09 = 'icon_09.png',
  Icon10 = 'icon_10.png',
  Icon11 = 'icon_11.png',
  Icon12 = 'icon_12.png',
  Icon13 = 'icon_13.png',
  Icon14 = 'icon_14.png',
  Icon15 = 'icon_15.png'
}

enum StageFormat {
  SQUARE = 'square',
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  UNDEFINED = ''
}

enum ToolbarStatus {
  SHOW = 'show',
  HIDE = 'hide'
}

enum UploadedTypes {
  DownloadIcon = 'download.png',
  FacebookIcon = 'facebook.png',
  TwitterIcon = 'twitter.png',
  WhatsappIcon = 'whatsapp.png'
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

type ISvgComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

type IObjectPos = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type TArtwork = {
  contact: string | null;
  createdAt: { _seconds: number };
  id: string;
  imgUrl: string;
  message: string;
  status: string;
  thumbnails: {
    url: string;
    width: number;
    height: number;
  };
};

export type { ISvgShapeAttribute, ISvgComponent, IObjectPos, TArtwork };

export {
  SceneType,
  ShapeType,
  IconType,
  BottleType,
  StageFormat,
  ToolbarStatus,
  UploadedTypes
};
