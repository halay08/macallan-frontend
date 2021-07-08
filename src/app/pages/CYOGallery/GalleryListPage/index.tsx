import { useCallback, useEffect, useState } from 'react';
import { ArrowDownIcon } from '../assets';
import {
  Header,
  Container,
  ArtworkItem,
  MonthFilter,
  TitleBar,
  Popup,
  SlidePopup
} from '../Components';
import styled from 'styled-components/macro';
import { ArtworkService } from 'app/services';

import { useHistory } from 'react-router-dom';
import { useResponsive } from 'utils/responsive';
import { TArtwork } from 'types';
import isEmpty from 'ramda.isempty';
import { Masonry } from 'masonic';
import { fetchStart, fetchError, fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

const PAGE_LIMIT = 8;

type Props = { artworkParam?: TArtwork | null };

const masonryOptions = {
  desktop: {
    columnGutter: 16,
    columnCount: 4
  },
  tablet: {
    columnGutter: 16,
    columnCount: 3
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
  const [pagination, setPagination] = useState({
    lastRef: undefined,
    totalItemOfPage: 0
  });
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<filterType>({});
  const history = useHistory();
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

  const getMoreArtworks = async () => {
    let options = { limit: PAGE_LIMIT };
    if (pagination.lastRef) options['startAfter'] = pagination.lastRef;
    options['filterByTime'] = getFilterOption(filter);

    try {
      dispatch(fetchStart());
      const artworkService = new ArtworkService();
      const result = await artworkService.getArtworks(options);

      setArtworks(prevArtworks => [...result.items, ...prevArtworks]);
      setPagination(result.pagination);
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };

  const getArtworks = async () => {
    let options = { limit: PAGE_LIMIT };
    options['filterByTime'] = getFilterOption(filter);

    try {
      dispatch(fetchStart());
      const artworkService = new ArtworkService();
      const result = await artworkService.getArtworks(options);

      setArtworks(result.items);
      setPagination(result.pagination);
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };

  useEffect(() => {
    const masonryKey = isEmpty(filter) ? '' : `${filter.month}-${filter.year}`;

    setArtworks([]);
    setMasonryKey(masonryKey);
    getArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
    if (isMobile) {
      setSelectedArtwork(artwork);
      setShowPopup(true);
      return;
    }
    history.push(`/gallery/${artwork.id}`);
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
        {artworks.length > 0 && pagination.totalItemOfPage === PAGE_LIMIT && (
          <button
            className="w-full flex justify-center py-4 focus:outline-none"
            onClick={() => getMoreArtworks()}
          >
            <img className="w-4" src={ArrowDownIcon} alt="load more" />
          </button>
        )}
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
        title="Gallery Wall"
        artwork={selectedArtwork}
        onClose={() => setShowPopup(false)}
      />
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
