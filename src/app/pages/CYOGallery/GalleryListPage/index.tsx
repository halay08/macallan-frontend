import { useCallback, useEffect, useState } from 'react';
import {
  Header,
  Container,
  ArtworkItem,
  MonthFilter,
  TitleBar,
  Popup,
  SlidePopup,
  Footer
} from '../Components';
import styled from 'styled-components/macro';
import { ArtworkService } from 'app/services';
import { useResponsive } from 'utils/responsive';
import { TArtwork } from 'types';
import isEmpty from 'ramda.isempty';
import { Masonry } from 'masonic';
import { fetchStart, fetchError, fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';
import { useLoadMore } from 'utils/useLoadMore';

const PAGE_LIMIT = 8;

type Props = { artworkParam?: TArtwork | null };

const masonryOptions = {
  desktop: {
    columnGutter: 16,
    columnCount: 6
  },
  tablet: {
    columnGutter: 16,
    columnCount: 4
  },
  mobile: {
    columnGutter: 12,
    columnCount: 2
  }
};

type filterType = {
  month?: number;
  year?: number;
};

export const GalleryListPage = ({ artworkParam }: Props) => {
  const [artworks, setArtworks] = useState<TArtwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<filterType>({});
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const dispatch = useDispatch();
  const [masonryKey, setMasonryKey] = useState('');

  const getFilterOption = value => {
    if (isEmpty(value)) return;

    return {
      month: [value.month - 1],
      year: value.year
    };
  };

  const getArtworks = async (lastDocumentId?) => {
    try {
      dispatch(fetchStart());
      const option = {
        filterByTime: getFilterOption(filter),
        status: 'approved',
        limit: PAGE_LIMIT,
        startAfter: lastDocumentId
      };
      const service = new ArtworkService();
      const newGalleries = await service.getArtworks(option);
      dispatch(fetchSuccess());
      return newGalleries;
    } catch ({ message = DEFAULT_ERROR }) {
      dispatch(fetchError(message));
    }
  };

  useEffect(() => {
    const masonryKey = isEmpty(filter) ? '' : `${filter.month}-${filter.year}`;

    setArtworks([]);
    setMasonryKey(masonryKey);
    handleGetData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const [handleGetData] = useLoadMore(getArtworks, setArtworks);

  useEffect(() => {
    if (artworkParam) {
      setSelectedArtwork(artworkParam);
      setShowPopup(true);
    }
  }, [artworkParam]);

  const renderArtworkItem = useCallback(
    ({ data: artwork }) => (
      <div className="flex flex-col">
        <ArtworkItem
          thumbnail
          artwork={artwork}
          onClick={() => onArtworkClick(artwork)}
        />
        <p className="truncate mt-1 sm:mt-2 text-sm text-center font-sans uppercase font-bold">
          {artwork.message}
        </p>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onArtworkClick = (artwork: TArtwork) => {
    setSelectedArtwork(artwork);
    setShowPopup(true);
  };

  const masonryOption = {
    ...(isMobile && masonryOptions.mobile),
    ...(isTablet && masonryOptions.tablet),
    ...(isDesktop && masonryOptions.desktop)
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <TitleBar
          openFilter={() => setShowFilter(true)}
          content={
            <p className="font-secondary text-xs tracking-widest font-bold text-gray-dark">
              {artworks.length} results
            </p>
          }
        />
        <div className="mt-4 sm:mt-10">
          <Masonry
            key={masonryKey}
            className="focus:outline-none"
            items={artworks}
            render={renderArtworkItem}
            overscanBy={5}
            {...masonryOption}
          />
        </div>
      </Container>
      <SlidePopup
        className="sm:w-1/2 md:w-1/4 w-full"
        show={showFilter}
        width="25%"
        closeHandler={() => setShowFilter(false)}
      >
        <p className="font-primary-bold uppercase tracking-wider my-2">
          PUBLICATION DATE
        </p>
        <MonthFilter value={filter} onFilterChange={setFilter} />
      </SlidePopup>
      <Popup
        isOpen={showPopup}
        artwork={selectedArtwork}
        onClose={() => setShowPopup(false)}
      />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .masonry-grid {
    margin-right: -1rem;
    margin-left: -1rem;
    display: flex;
    width: auto;
    margin-top: 2.5rem;

    @media (max-width: 767px) {
      margin-top: 1rem;
      margin-right: -0.5rem;
      margin-left: -0.5rem;
    }
  }

  .masonry-grid_column {
    padding: 0 1rem;

    @media (max-width: 767px) {
      padding: 0 0.5rem;
    }
  }
`;
