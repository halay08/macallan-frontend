import { useEffect, useState } from 'react';
import path from 'ramda.path';

const isIOS = () => {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
};

const useLandscape = () => {
  const [isOrientation, setIsOrientation] = useState(false);

  const isOrientationLandscape = ev => {
    const angle = path(['target', 'screen', 'orientation', 'angle'], ev) || 0;
    setIsOrientation(angle > 0);
  };

  const isOrientationIOS = () => {
    if (!isIOS()) return;
    setIsOrientation(window.innerWidth > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', isOrientationIOS);
    window.addEventListener('orientationchange', isOrientationLandscape);

    return () => {
      window.removeEventListener('resize', isOrientationIOS);
      window.removeEventListener('orientationchange', isOrientationLandscape);
    };
  }, []);

  return { isOrientation };
};

export { useLandscape };
