import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import MetaTags from 'react-meta-tags';

export const ArtworkSharing = () => {
  const { id } = useParams<{ id: string }>();

  const getImageLink = () => {
    const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
    const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/images%2F`;
    const imageName = `${id}.png`;
    return firebaseStorage + bucket + imageName + '?alt=media';
  };

  return (
    <>
      <MetaTags>
        <title>Create Your Own - Artwork</title>
        <meta name="description" content="Create Your Own - Artwork" />
        <meta property="og:image" content={getImageLink()} />
        <meta property="og:title" content="Create Your Own - Artwork" />
        <meta property="og:description" content="" />
      </MetaTags>
      <Wrapper className="h-screen flex flex-col justify-center">
        <Image className="select-none m-auto" src={getImageLink()} />
      </Wrapper>
    </>
  );
};

const Image = styled.img`
  background-color: hsl(0, 0%, 90%);
  transition: background-color 300ms;
`;
const Wrapper = styled.div`
  background: #0e0e0e;
`;
