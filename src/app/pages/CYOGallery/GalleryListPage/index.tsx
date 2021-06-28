import { useEffect, useState } from 'react';
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
import Masonry from 'react-masonry-css';

import { useHistory } from 'react-router-dom';
import { useResponsive } from 'utils/responsive';
import { TArtwork } from 'types';

const breakpointColumnsObj = {
  default: 4,
  1024: 3,
  640: 2
};

const PAGE_LIMIT = 8;

type Props = { artworkParam?: TArtwork };

export const GalleryListPage = ({ artworkParam }: Props) => {
  const [artworks, setArtworks] = useState<TArtwork[]>([]);
  const [pagination, setPagination] = useState({
    lastRef: null,
    totalItemOfPage: 0
  });
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({ month: {} });
  const history = useHistory();
  const { isMobile } = useResponsive();

  const getArtworks = async () => {
    const artworkService = new ArtworkService();
    let options = { limit: PAGE_LIMIT };
    if (pagination.lastRef) options['startAfter'] = pagination.lastRef;
    const result = await artworkService.getArtworks(options);

    setArtworks(prevArtworks => [...prevArtworks, ...result.items]);
    setPagination(result.pagination);
  };

  useEffect(() => {
    getArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (artworkParam) {
      setSelectedArtwork(artworkParam);
      setShowPopup(true);
    }
  }, [artworkParam]);

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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {artworks.map(artwork => (
            <div className="flex flex-col" key={artwork.id}>
              <ArtworkItem
                onClick={() => onArtworkClick(artwork)}
                artwork={artwork}
              />
              <p className="my-1 sm:my-4 text-sm text-center font-sans uppercase font-bold">
                {artwork.message}
              </p>
            </div>
          ))}
        </Masonry>
        {pagination.totalItemOfPage === PAGE_LIMIT && (
          <button
            className="w-full flex justify-center py-4 focus:outline-none"
            onClick={() => getArtworks()}
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
    display: flex;
    width: auto;
    margin-top: 2.5rem;

    @media (max-width: 767px) {
      margin-top: 1rem;
    }
  }

  .masonry-grid_column {
    margin-right: 2rem;

    @media (max-width: 767px) {
      margin-right: 1rem;
    }
  }

  .masonry-grid_column:last-child {
    margin-right: 0;
  }
`;
