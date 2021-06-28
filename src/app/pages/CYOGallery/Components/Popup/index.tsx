import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import styled from 'styled-components';
import { ArtworkItem, ArtworkAction } from '../';
import { TArtwork } from 'types';

type Props = {
  isOpen: boolean;
  title: string;
  artwork: TArtwork | null;
  onClose: Function;
};

export const Popup = ({ isOpen, title, artwork, onClose }: Props) => {
  return isOpen ? (
    <>
      <div
        className="justify-center top-1/12 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => onClose()}
      >
        <Container className="relative w-auto my-6 mx-auto max-w-screen-lg">
          <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center pt-1 sm:p-3 border-b border-solid border-gray-light">
              <div className="text-base sm:text-2xl font-semibold font-primary m-auto uppercase tracking-wider sm:tracking-widest sm:leading-6">
                {title}
              </div>
              <button
                className="absolute top-1 right-1 p-1 ml-auto bg-transparent border-0 text-black float-right leading-none outline-none focus:outline-none"
                onClick={() => onClose()}
              >
                <CloseSvg className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="relative p-6 flex justify-center">
              {artwork && (
                <div className="sm:max-w-md">
                  <ArtworkItem artwork={artwork} noShadow />
                  <div className="w-full flex flex-col">
                    <ArtworkAction artwork={artwork} onClose={onClose} />
                  </div>
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
`;
