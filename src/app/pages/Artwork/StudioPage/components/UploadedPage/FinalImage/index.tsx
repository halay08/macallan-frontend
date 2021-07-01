import { useResponsive } from 'utils/responsive';
import { FinalImageDesktop } from './FinalImageDesktop';
import { FinalImageMobile } from './FinalImageMobile';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import Konva from 'konva';
import { useEffect } from 'react';
import { storage } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { base64toBlob } from 'app/helpers';
import {
  fetchError,
  fetchStart,
  fetchSuccess,
  setImageId
} from 'redux/actions';
import { ERROR_MESSAGE } from 'app/helpers/constants';

export const FinalImage = () => {
  const { isMobile } = useResponsive();
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stage.name) return;

    const [transformer] = stage.find('Transformer') as Konva.Transformer[];
    transformer.nodes([]);

    stage.toImage({
      callback(image) {
        if (!isMobile) {
          image.className = 'w-3/4';
        }
        document.getElementById('finalImageContainer')?.append(image);
      }
    });

    (async () => {
      try {
        dispatch(fetchStart());
        const id = uuidv4();
        await uploadToStorage(id);
        dispatch(setImageId(id));
        dispatch(fetchSuccess());
      } catch (e) {
        const { message = ERROR_MESSAGE } = e;
        dispatch(fetchError(message));
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
