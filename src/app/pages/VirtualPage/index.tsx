import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import TourHelper from './helpers';
import { loadScript } from 'app/helpers';
import { useResponsive } from 'utils/responsive';

export function VirtualPage() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const preloadRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();

  const addFullScreenStyle = (element: HTMLElement) => {
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.padding =
      'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
  };

  useEffect(() => {
    let tdvPlayerScript: HTMLScriptElement;
    let script: HTMLScriptElement;
    (async function () {
      if (!viewerRef.current || !preloadRef.current) return;
      tdvPlayerScript = await loadScript(TourHelper.TDV_PLAYER);
      script = await loadScript(TourHelper.SCRIPT);

      if (!window.TDV) return;
      addFullScreenStyle(document.documentElement);
      addFullScreenStyle(document.body);
      const tour = new TourHelper(
        viewerRef.current,
        preloadRef.current,
        isMobile
      );
      tour.onLoad();
    })();

    return () => {
      if (tdvPlayerScript) tdvPlayerScript.remove();
      if (script) script.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Virtual Experience</title>
        <meta name="description" content="Macallan - Virtual Experience" />
      </Helmet>
      <div
        ref={preloadRef}
        className="relative bg-white transition-opacity w-full h-screen text-gray-dark flex items-center justify-center"
      >
        Loading virtual tour. Please wait...
      </div>
      <div ref={viewerRef} className="absolute w-full h-full z-10 top-0"></div>
    </>
  );
}
