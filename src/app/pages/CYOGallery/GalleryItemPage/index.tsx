import { ArtworkService } from 'app/services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useResponsive } from 'utils/responsive';
import { GalleryItemDesktop } from './GalleryItemDesktop';
import { GalleryListPage } from '../GalleryListPage';
import { TArtwork } from 'types';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const GalleryItemPage = () => {
  const [artwork, setArtwork] = useState<TArtwork | null>(null);
  const { id } = useParams<{ id: string }>();
  const { isMobile } = useResponsive();
  const dispatch = useDispatch();

  useEffect(() => {
    const getArtwork = async () => {
      try {
        dispatch(fetchStart());
        const artworkService = new ArtworkService();
        const allArtworks = await artworkService.getArtworkById(id);

        setArtwork(allArtworks);
        dispatch(fetchSuccess());
      } catch (error) {
        dispatch(fetchError(error));
      }
    };

    getArtwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
