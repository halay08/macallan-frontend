import { useEffect, useState } from 'react';
import path from 'ramda.path';

const useLandscape = () => {
  const [isOrientation, setIsOrientation] = useState(false);

  const isOrientationLandscape = ev => {
    const angle = path(['target', 'screen', 'orientation', 'angle'], ev) || 0;
    return setIsOrientation(angle > 0);
  };

  const isOrientationIOS = () => {
    return setIsOrientation(window.innerWidth > window.innerHeight);
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
