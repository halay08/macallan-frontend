import {
  Header,
  Container,
  ArtworkItem,
  TitleBar,
  ArtworkAction
} from '../Components';
import { useHistory } from 'react-router-dom';
import { TArtwork } from 'types';

type Props = {
  artwork: TArtwork | null;
};

export const GalleryItemDesktop = ({ artwork }: Props) => {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        {artwork ? (
          <>
            <TitleBar
              showActions={false}
              content={
                <p className="font-secondary text-xs tracking-widest font-bold text-gray-dark uppercase">
                  GALLERY WALL | {artwork.message}
                </p>
              }
            />
            <div className="flex my-10 justify-between">
              <div className="w-3/5">
                {artwork && <ArtworkItem artwork={artwork} />}
              </div>
              <div className="w-4/12 flex flex-col">
                <ArtworkAction
                  artwork={artwork}
                  onClose={() => history.push('/gallery')}
                />
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};
