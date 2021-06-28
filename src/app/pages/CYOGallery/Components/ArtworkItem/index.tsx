import styled from 'styled-components/macro';
import { MouseEventHandler } from 'react';
import { getFirebaseImageLink } from '../../utils';
import { TArtwork } from 'types';

type Props = {
  artwork: TArtwork;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  noShadow?: boolean;
};

export const ArtworkItem = ({
  noShadow = false,
  artwork,
  onClick = () => ''
}: Props) => {
  const { imgUrl, id } = artwork;

  return (
    <button key={id} className="w-full focus:outline-none" onClick={onClick}>
      <Img
        noShadow={noShadow}
        id={id}
        src={getFirebaseImageLink(imgUrl)}
        alt="artwork"
      />
    </button>
  );
};

const Img = styled.img<{ noShadow: boolean }>`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  box-shadow: ${({ noShadow }) =>
    !noShadow && 'rgba(0, 0, 0, 0.3) 0px 1px 4px'};
`;
