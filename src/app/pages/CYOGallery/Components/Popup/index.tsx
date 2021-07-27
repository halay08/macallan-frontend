import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import styled from 'styled-components';
import { ArtworkItem } from '../';
import { TArtwork } from 'types';

type Props = {
  isOpen: boolean;
  artwork: TArtwork | null;
  onClose: Function;
};

export const Popup = ({ isOpen, artwork, onClose }: Props) => {
  const publishDate = artwork
    ? new Date(artwork.createdAt._seconds * 1000).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      })
    : '';

  return isOpen ? (
    <>
      <div className="justify-center top-1/12 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <Container className="relative w-auto my-auto mx-auto max-w-screen-lg">
          <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center pt-1 sm:p-3 border-b border-solid border-gray-light h-10">
              <div className="text-base sm:text-2xl font-semibold font-primary m-auto uppercase tracking-wider sm:tracking-widest sm:leading-6 min-h-4">
                Gallery Wall
              </div>
              <button
                className="absolute top-1 right-1 p-2 ml-auto bg-transparent border-0 text-black float-right leading-none outline-none focus:outline-none"
                onClick={() => onClose()}
              >
                <CloseSvg className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="relative p-6 md:p-16 flex justify-center">
              {artwork && (
                <div className="sm:max-w-lg w-full font-Alternate-bold uppercase text-sm sm:text-xl text-center">
                  <ArtworkItem artwork={artwork} />
                  <p className="mt-2">{artwork.message}</p>
                  <p className="text-gray-dark">{publishDate}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-gray-light"></div>
    </>
  ) : (
    <></>
  );
};

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  height: fit-content;
`;
