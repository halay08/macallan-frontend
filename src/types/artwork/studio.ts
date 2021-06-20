enum SceneType {
  SHAPE = 'shape',
  TEXT = 'text',
  ICON = 'icon',
  BOTTLE = 'bottle',
  SIGN_OFF = 'signOff'
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
  Generic01 = 'icon_generic_01.svg',
  Generic02 = 'icon_generic_02.svg',
  Generic03 = 'icon_generic_03.svg',
  Generic04 = 'icon_generic_04.svg',
  Generic05 = 'icon_generic_05.svg',
  Generic06 = 'icon_generic_06.svg',
  Generic07 = 'icon_generic_07.svg',
  HappyNewYear01 = 'icon_happy_new_year_01.svg',
  HappyNewYear02 = 'icon_happy_new_year_02.svg',
  HappyNewYear03 = 'icon_happy_new_year_03.svg',
  HappyNewYear04 = 'icon_happy_new_year_04.svg',
  HappyNewYear05 = 'icon_happy_new_year_05.svg',
  HappyNewYear06 = 'icon_happy_new_year_06.svg',
  HappyNewYear07 = 'icon_happy_new_year_07.svg',
  Occasion01 = 'icon_occasion_01.svg',
  Occasion02 = 'icon_occasion_02.svg',
  Occasion03 = 'icon_occasion_03.svg',
  Occasion04 = 'icon_occasion_04.svg',
  Occasion05 = 'icon_occasion_05.svg',
  Occasion06 = 'icon_occasion_06.svg',
  Occasion07 = 'icon_occasion_07.svg',
  Xmas01 = 'icon_xmas_01.svg',
  Xmas02 = 'icon_xmas_02.svg',
  Xmas03 = 'icon_xmas_03.svg',
  Xmas04 = 'icon_xmas_04.svg',
  Xmas05 = 'icon_xmas_05.svg',
  Xmas06 = 'icon_xmas_06.svg',
  Xmas07 = 'icon_xmas_07.svg',
  Xmas08 = 'icon_xmas_08.svg',
  Xmas09 = 'icon_xmas_09.svg',
  Xmas010 = 'icon_xmas_10.svg',
  Xmas011 = 'icon_xmas_11.svg',
  Xmas012 = 'icon_xmas_12.svg',
  Xmas013 = 'icon_xmas_13.svg',
  Xmas014 = 'icon_xmas_14.svg'
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
  DouyinIcon = 'douyin.png',
  DownloadIcon = 'download.png',
  EcardIcon = 'e-card',
  FacebookIcon = 'facebook.png',
  TwitterIcon = 'twitter.png',
  WechatIcon = 'wechat.png',
  WeiboIcon = 'weibo.png',
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

export type { ISvgShapeAttribute, ISvgComponent, IObjectPos };

export {
  SceneType,
  ShapeType,
  IconType,
  BottleType,
  StageFormat,
  ToolbarStatus,
  UploadedTypes
};
