import styled from 'styled-components/macro';
import { MouseEventHandler } from 'react';
import { getStorageImageUrl } from 'app/helpers';
import { TArtwork } from 'types';

type Props = {
  artwork: TArtwork;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ArtworkItem = ({ artwork, onClick = () => '' }: Props) => {
  const { imgUrl, id } = artwork;
  // const src = getStorageImageUrl(thumbnails ? thumbnails.url : imgUrl);
  const src = getStorageImageUrl(imgUrl);

  return (
    <Button
      key={id}
      className="max-w-full focus:outline-none"
      onClick={onClick}
    >
      <img className="max-w-full max-h-full" id={id} src={src} alt="artwork" />
    </Button>
  );
};

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  overflow: hidden;

  & img {
    transition: all 500ms ease;
  }

  & img:hover {
    transform: scale(1.3);
  }
`;
