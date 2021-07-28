export const getFirebaseImageLink = (imgSrc: string) => {
  if (imgSrc.startsWith('images%2F')) {
    return (
      process.env.REACT_APP_SHARING_ENDPOINT + '/artwork/' + imgSrc.substring(9)
    );
  }
  return process.env.REACT_APP_SHARING_ENDPOINT + '/artwork/' + imgSrc;
};

export const getStorageImageUrl = (key: string) => {
  const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
  const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/`;
  const imageName = key.replaceAll('/', '%2F');
  return `${firebaseStorage}${bucket}${imageName}?alt=media`;
};
