import { isOVRWeb, getParams } from './index';

declare global {
  interface Window {
    TDV: any;
  }
}

export class TourHelper {
  static TDV_PLAYER: string = '/lib/tdvplayer.js?v=1623410382216';
  static SCRIPT: string = '/script.js?v=1623410382216';
  static WEBVR_POLYFILL: string = '/lib/WebVRPolyfill.js?v=1623410382216';
  static HLS: string = '/lib/Hls.js?v=1623410382216';
  static QUERY_STRING_PARAMETERS: string = 'v=1623410382216';
  static GENERAL_SCRIPT: string =
    process.env.NODE_ENV === 'production'
      ? '/script_general_production.js?v=1623410382216'
      : '/script_general.js?v=1623410382216';
  static MOBILE_SCRIPT: string =
    process.env.NODE_ENV === 'production'
      ? '/script_mobile_production.js?v=1623410382216'
      : '/script_mobile.js?v=1623410382216';

  tour: any;
  viewer: HTMLDivElement;
  preloadContainer: HTMLDivElement;

  constructor(viewer: HTMLDivElement, preloadContainer: HTMLDivElement) {
    this.viewer = viewer;
    this.preloadContainer = preloadContainer;
  }

  loadTour() {
    if (this.tour) return;

    if (
      /AppleWebKit/.test(navigator.userAgent) &&
      /Mobile\/\w+/.test(navigator.userAgent)
    ) {
      var preloadContainer = document.getElementById('preloadContainer');
      if (preloadContainer)
        document.body.style.backgroundColor =
          window.getComputedStyle(preloadContainer).backgroundColor;
    }

    const settings = new window.TDV.PlayerSettings();
    const settingsObj = window.TDV.PlayerSettings;
    settings.set(settingsObj.CONTAINER, this.viewer);
    settings.set(settingsObj.WEBVR_POLYFILL_URL, TourHelper.WEBVR_POLYFILL);
    settings.set(settingsObj.HLS_URL, TourHelper.HLS);
    settings.set(
      settingsObj.QUERY_STRING_PARAMETERS,
      TourHelper.QUERY_STRING_PARAMETERS
    );

    this.tour = new window.TDV.Tour(settings, {
      general: TourHelper.GENERAL_SCRIPT,
      mobile: TourHelper.MOBILE_SCRIPT
    });

    this.tour.bind(
      window.TDV.Tour.EVENT_TOUR_INITIALIZED,
      this.onVirtualTourInit
    );
    this.tour.bind(window.TDV.Tour.EVENT_TOUR_LOADED, this.disposePreloader);
    this.tour.load();
  }

  pauseTour() {
    if (!this.tour) return;
    this.tour.pause();
  }

  resumeTour() {
    if (!this.tour) return;
    this.tour.resume();
  }

  onVirtualTourInit() {
    if (!this.tour) return;
    const updateTexts = function (this: any) {
      document.title = this.trans('tour.name');
    };

    this.tour.locManager?.bind(
      window.TDV.Tour.LocaleManager.EVENT_LOCALE_CHANGED,
      updateTexts.bind(this.tour.locManager)
    );
  }

  showPreloader() {
    if (this.preloadContainer) this.preloadContainer.style.opacity = '1';
  }

  onLoad() {
    if (
      /AppleWebKit/.test(navigator.userAgent) &&
      /Mobile\/\w+/.test(navigator.userAgent)
    ) {
      var onOrientationChange = function () {
        document.documentElement.style.height = 'initial';
        Array.from(document.querySelectorAll('.fill-viewport')).forEach(
          function (element) {
            element.classList.toggle(
              'landscape-right',
              window.orientation === -90
            );
            element.classList.toggle(
              'landscape-left',
              window.orientation === 90
            );
          }
        );
        setTimeout(function () {
          document.documentElement.style.height = '100%';
        }, 500);
      };
      window.addEventListener('orientationchange', onOrientationChange);
      onOrientationChange();
    }

    const params = getParams(window.location.search.substr(1));
    if (params && params.hasOwnProperty('skip-loading')) {
      this.loadTour();
      this.disposePreloader();
      return;
    }

    if (isOVRWeb()) {
      this.showPreloader();
      this.loadTour();
      return;
    }

    this.showPreloader();
    this.loadTour();
  }

  disposePreloader() {
    if (!this.preloadContainer) return;

    const hide = () => {
      document.body.style.backgroundColor = window.getComputedStyle(
        this.preloadContainer
      ).backgroundColor;
      this.preloadContainer.style.visibility = 'hidden';
      this.preloadContainer.style.display = 'none';
      const videoList = this.preloadContainer.getElementsByTagName('video');
      for (let i = 0; i < videoList.length; ++i) {
        const video = videoList[i];
        video.pause();
        while (video.children.length) video.removeChild(video.children[0]);
      }
    };

    const transitionEndEventName = () => {
      const el = document.createElement('div');
      const transitions = {
        transition: 'transitionend',
        OTransition: 'otransitionend',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd'
      };

      for (let t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }

      return undefined;
    };

    const transitionEndName = transitionEndEventName();
    if (transitionEndName) {
      this.preloadContainer.addEventListener(transitionEndName, hide, false);
      this.preloadContainer.style.opacity = '0';
      setTimeout(hide, 500); //Force hide. Some cases the transitionend event isn't dispatched with an iFrame.
    } else {
      hide();
    }
  }
}
