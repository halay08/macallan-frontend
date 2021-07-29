import styled from 'styled-components/macro';
import { MouseEventHandler } from 'react';
import { getStorageImageUrl } from 'app/helpers';
import { TArtwork } from 'types';

type Props = {
  thumbnail?: boolean;
  artwork: TArtwork;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  imgClass?: string;
  btnClass?: string;
};

export const ArtworkItem = ({
  thumbnail = false,
  artwork,
  onClick = () => '',
  imgClass = '',
  btnClass = ''
}: Props) => {
  const { imgUrl, id, thumbnails } = artwork;
  const src = getStorageImageUrl(thumbnail ? thumbnails.url : imgUrl);

  return (
    <Button
      thumbnail={thumbnail}
      key={id}
      className={`max-w-full focus:outline-none ${btnClass}`}
      onClick={onClick}
    >
      <Image
        className={`m-auto w-full ${imgClass}`}
        id={id}
        src={src}
        alt="artwork"
      />
    </Button>
  );
};

const Button = styled.button<{ thumbnail: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  overflow: hidden;

  ${({ thumbnail }) =>
    thumbnail
      ? `& img:hover {
          transform: scale(1.3);
        }`
      : `cursor: default;`}

  & img {
    transition: all 500ms ease;
  }
`;

const Image = styled.img`
  max-height: 60vh;
`;
