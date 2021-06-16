import { TextureDesktop } from './TextureDesktop';
import { TextureMobile } from './TextureMobile';
import { useResponsive } from 'utils/responsive';

export const Texture = () => {
  const { isMobile } = useResponsive();
  return isMobile ? <TextureMobile /> : <TextureDesktop />;
};
