enum SceneType {
  SHAPE = 'shape',
  TEXT = 'text',
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
  Generic01 = 'icon_generic_01.png',
  Generic02 = 'icon_generic_02.png',
  Generic03 = 'icon_generic_03.png',
  Generic04 = 'icon_generic_04.png',
  Generic05 = 'icon_generic_05.png',
  Generic06 = 'icon_generic_06.png',
  Generic07 = 'icon_generic_07.png',
  HappyNewYear01 = 'icon_happy_new_year_01.png',
  HappyNewYear02 = 'icon_happy_new_year_02.png',
  HappyNewYear03 = 'icon_happy_new_year_03.png',
  HappyNewYear04 = 'icon_happy_new_year_04.png',
  HappyNewYear05 = 'icon_happy_new_year_05.png',
  HappyNewYear06 = 'icon_happy_new_year_06.png',
  HappyNewYear07 = 'icon_happy_new_year_07.png',
  Occasion01 = 'icon_occasion_01.png',
  Occasion02 = 'icon_occasion_02.png',
  Occasion03 = 'icon_occasion_03.png',
  Occasion04 = 'icon_occasion_04.png',
  Occasion05 = 'icon_occasion_05.png',
  Occasion06 = 'icon_occasion_06.png',
  Occasion07 = 'icon_occasion_07.png',
  Xmas01 = 'icon_xmas_01.png',
  Xmas02 = 'icon_xmas_02.png',
  Xmas03 = 'icon_xmas_03.png',
  Xmas04 = 'icon_xmas_04.png',
  Xmas05 = 'icon_xmas_05.png',
  Xmas06 = 'icon_xmas_06.png',
  Xmas07 = 'icon_xmas_07.png',
  Xmas08 = 'icon_xmas_08.png',
  Xmas09 = 'icon_xmas_09.png',
  Xmas010 = 'icon_xmas_10.png',
  Xmas011 = 'icon_xmas_11.png',
  Xmas012 = 'icon_xmas_12.png',
  Xmas013 = 'icon_xmas_13.png',
  Xmas014 = 'icon_xmas_14.png'
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
  ECardIcon = 'e-card.png',
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
