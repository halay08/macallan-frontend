import { ReactComponent as LogoSvg } from './assets/logo.svg';

export const Logo = () => {
  return (
    <a href="/" className="pl-7 logo lg:ml-10">
      <LogoSvg />
    </a>
  );
};
