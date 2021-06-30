import { Shape } from '../Shape';
import * as shapes from '../../assets/shapes';
import { ShapeType } from 'types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ColorPicker, Texture } from '../Navigation';

type props = {
  drawTexture: Function;
};
export const ShapeBoxDesktop = ({ drawTexture }: props) => {
  return (
    <div className="w-full">
      <div className="m-auto pb-20 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-AGaramondPro-bold text-2xl">
            STEP 2: CHOOSE SHAPE
          </strong>
        </div>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className="flex flex-wrap justify-center">
            {Object.keys(shapes).map(shape => (
              <button
                className="p-2 focus:outline-none focus:shadow-md active:shadow-md"
                key={shape}
                onClick={() => drawTexture(ShapeType[shape])}
              >
                <Shape src={shapes[shape]} />
              </button>
            ))}
          </div>
          <div className="mt-6">
            <ColorPicker />
          </div>
          <div className="my-6">
            <Texture />
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};
