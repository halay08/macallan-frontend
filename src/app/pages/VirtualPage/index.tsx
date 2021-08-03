import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import TourHelper from './helpers';
import { addDynamicScript, loadScript } from 'app/helpers';

export function VirtualPage() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const preloadRef = useRef<HTMLDivElement>(null);

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
      const tour = new TourHelper(viewerRef.current, preloadRef.current);
      tour.onLoad();
    })();

    addDynamicScript(
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P9JTRN6');`
    );

    return () => {
      if (tdvPlayerScript) tdvPlayerScript.remove();
      if (script) script.remove();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Virtual Experience</title>
        <meta name="description" content="Macallan - Virtual Experience" />
      </Helmet>
      <div
        ref={preloadRef}
        className="relative bg-white transition-opacity w-full h-screen text-gray-dark flex items-center justify-center fill-viewport"
      >
        Loading virtual tour. Please wait...
      </div>
      <div
        ref={viewerRef}
        className="absolute w-full h-full z-10 top-0 fill-viewport"
      ></div>
    </>
  );
}
