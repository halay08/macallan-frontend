import { ArtworkService } from 'app/services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useResponsive } from 'utils/responsive';
import { GalleryItemDesktop } from './GalleryItemDesktop';
import { GalleryListPage } from '../GalleryListPage';
import { TArtwork } from 'types';

export const GalleryItemPage = () => {
  const [artwork, setArtwork] = useState<TArtwork | null>(null);
  const { id } = useParams<{ id: string }>();
  const { isMobile } = useResponsive();

  useEffect(() => {
    const getArtwork = async () => {
      const artworkService = new ArtworkService();
      const allArtworks = await artworkService.getArtworkById(id);

      setArtwork(allArtworks);
    };

    getArtwork();
  }, [id]);

  return (
    <>
      {isMobile ? (
        <GalleryListPage artworkParam={artwork} />
      ) : (
        <GalleryItemDesktop artwork={artwork} />
      )}
    </>
  );
};
