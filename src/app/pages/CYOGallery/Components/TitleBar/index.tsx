import type { ReactNode } from 'react';
import { FilterIcon } from '../../assets';

type Props = {
  content?: ReactNode | string;
  showActions?: Boolean;
  openFilter?: Function;
};

export const TitleBar = ({
  content,
  showActions = true,
  openFilter = () => ''
}: Props) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div>
        <h3 className="text-2xl font-primary-bold uppercase leading-6 tracking-widest">
          Gallery Wall
        </h3>
        {content}
      </div>
      {showActions && (
        <div>
          <button className="focus:outline-none" onClick={() => openFilter()}>
            <img src={FilterIcon} alt="filter" />
          </button>
        </div>
      )}
    </div>
  );
};
