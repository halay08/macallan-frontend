import { TourHelper } from './TourHelper';

export default TourHelper;

export const playVideo = (video: HTMLVideoElement) => {
  const isSafariDesktopV11orGreater = (): boolean => {
    const checkBrowser =
      /^((?!chrome|android|crios|ipad|iphone).)*safari/i.test(
        navigator.userAgent
      );
    if (!checkBrowser) return false;
    const userAgent = /Version\/([0-9]+\.[0-9]+)/i.exec(navigator.userAgent);
    if (!userAgent || parseFloat(userAgent[1]) >= 11) return false;
    return true;
  };

  const hasAudio = (video: any): boolean => {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length)
    );
  };

  const detectUserAction = (video: HTMLVideoElement) => {
    const onVideoClick = (e: MouseEvent | TouchEvent) => {
      if (video.paused) {
        video.play();
      }
      video.muted = false;
      if (hasAudio(video)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      }

      video.removeEventListener('click', onVideoClick);
      video.removeEventListener('touchend', onVideoClick);
    };
    video.addEventListener('click', onVideoClick);
    video.addEventListener('touchend', onVideoClick);
  };

  if (isSafariDesktopV11orGreater()) {
    video.muted = true;
    video.play();
  }
  let canPlay = true;
  const promise = video.play();
  if (promise) {
    promise.catch(function () {
      video.muted = true;
      video.play();
      detectUserAction(video);
    });
  } else {
    canPlay = false;
  }

  if (!canPlay || video.muted) {
    detectUserAction(video);
  }
};

export const isOVRWeb = (): boolean =>
  window.location.hash.substring(1).split('&').indexOf('ovrweb') > -1;

export const getParams = (params: string): Object =>
  params.split('&').reduce((queryDict, item) => {
    const k = item.split('=')[0];
    const v = decodeURIComponent(item.split('=')[1]);
    queryDict[k.toLowerCase()] = v;
    return queryDict;
  }, {});
