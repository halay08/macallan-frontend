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

export const GalleryListPage = ({ artworkParam }: Props) => {
  const [artworks, setArtworks] = useState<TArtwork[]>([]);
  const [pagination, setPagination] = useState({
    lastRef: undefined,
    totalItemOfPage: 0
  });
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({ month: {} });
  const history = useHistory();
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const dispatch = useDispatch();

  const getFilterOption = value => {
    const months = Object.keys(value)
      .filter(month => value[month])
      .map(m => +m);
    const year = new Date().getFullYear();
    return months.length
      ? {
          month: months,
          year
        }
      : undefined;
  };

  const getMoreArtworks = async () => {
    let options = { limit: PAGE_LIMIT };
    if (pagination.lastRef) options['startAfter'] = pagination.lastRef;
    if (!isEmpty(filter.month))
      options['filterByTime'] = getFilterOption(filter.month);

    try {
      dispatch(fetchStart());
      const artworkService = new ArtworkService();
      const result = await artworkService.getArtworks(options);

      setArtworks(prevArtworks => [...prevArtworks, ...result.items]);
      setPagination(result.pagination);
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };

  const getArtworks = async () => {
    let options = { limit: PAGE_LIMIT };
    if (!isEmpty(filter.month))
      options['filterByTime'] = getFilterOption(filter.month);

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

  const onFilterChange = (value: { [key: number]: boolean }) => {
    setFilter({ month: value });
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
            className="focus:outline-none"
            items={artworks}
            render={renderArtworkItem}
            {...masonryOption}
          />
        </div>
        {pagination.totalItemOfPage === PAGE_LIMIT && (
          <button
            className="w-full flex justify-center py-4 focus:outline-none"
            onClick={() => getMoreArtworks()}
          >
            <img className="w-4" src={ArrowDownIcon} alt="load more" />
          </button>
        )}
      </Container>
      <SlidePopup
        className="sm:w-1/2 md:w-1/3 w-full"
        show={showFilter}
        width="25%"
        closeHandler={() => setShowFilter(false)}
      >
        <p className="text-sm font-primary-bold uppercase tracking-wider my-2">
          Month
        </p>
        <MonthFilter value={filter.month} onFilterChange={onFilterChange} />
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
