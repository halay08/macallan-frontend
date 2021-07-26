export const getFirebaseImageLink = (imgSrc: string) => {
  if (imgSrc.startsWith('images%2F')) {
    return process.env.REACT_APP_SHARING_ENDPOINT + '/' + imgSrc.substring(9);
  }
  return process.env.REACT_APP_SHARING_ENDPOINT + '/' + imgSrc;
};
