import { Shape } from '../Shape';
import * as shapes from '../../assets/shapes';
import { ShapeType } from 'types';
import { PerfectScrollbar } from 'app/components/ScrollBar';
import { ColorPicker, Texture } from '../Navigation';

type props = {
  drawTexture: Function;
};
export const ShapeBoxDesktop = ({ drawTexture }: props) => {
  return (
    <div className="w-full">
      <div className="m-auto pb-20 border-t-1 border-solid border-gray-light h-full pb-20 flex flex-col">
        <div className="grid text-center font-serif">
          <strong className="font-AGaramondPro-bold text-2xl">
            STEP 2: ADD SHAPE(S)
          </strong>
        </div>
        <PerfectScrollbar className="flex flex-col justify-center">
          <div className="mb-6">
            <ColorPicker />
          </div>
          <div className="mb-6">
            <Texture />
          </div>
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
        </PerfectScrollbar>
      </div>
    </div>
  );
};
