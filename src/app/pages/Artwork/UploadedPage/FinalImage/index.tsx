import { useResponsive } from 'utils/responsive';
import { FinalImageDesktop } from './FinalImageDesktop';
import { FinalImageMobile } from './FinalImageMobile';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import Konva from 'konva';
import { useEffect } from 'react';
import { storage } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { ArtworkService } from 'app/services';
import { base64toBlob } from 'app/helpers';

export const FinalImage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const { message } = useSelector<AppState, AppState['artwork']>(
    ({ artwork }) => artwork
  );

  useEffect(() => {
    if (!stage.name) return;

    const [transformer] = stage.find('Transformer') as Konva.Transformer[];
    transformer.nodes([]);

    stage.toImage({
      callback(image) {
        document.getElementById('finalImageContainer')?.append(image);
      }
    });

    (async () => {
      try {
        const id = uuidv4();
        const data = {
          imgUrl: `images/${id}.png`,
          message,
          status: 'in_review'
        };

        const artworkService = new ArtworkService();
        await artworkService.createArtwork(data);
        await uploadToStorage(id);
      } catch (e) {
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadToStorage = async id => {
    const dataUrl = stage.toDataURL();
    const fileName = `${id}.png`;
    const blob = base64toBlob(dataUrl, fileName);

    const ref = storage.ref('images').child(fileName);
    await ref.put(blob);
  };

  return isMobile ? <FinalImageMobile /> : <FinalImageDesktop />;
};
