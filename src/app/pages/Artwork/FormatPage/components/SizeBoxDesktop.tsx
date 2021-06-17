import styled from 'styled-components/macro';
import { StageFormat } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { setFormat } from 'redux/actions';
import { AppState } from 'redux/store';
import { useEffect } from 'react';

export const SizeBoxDesktop = () => {
  const selectedFormat = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const dispatch = useDispatch();
  const refs = {};

  useEffect(() => {
    if (!selectedFormat) return;

    (refs[selectedFormat] as any).focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFormat]);

  const storeStageFormat = (size: StageFormat) => {
    dispatch(setFormat(size));
  };

  return (
    <div className="flex flex-col justify-center h-full items-center">
      <div className="text-center">
        <strong className="font-AGaramondPro-bold text-2xl">
          STEP 1: CHOOSE FORMAT
        </strong>
      </div>
      <div className="mt-10 px-24">
        <div className="grid grid-cols-3 items-end text-center font-Alternate-bold">
          <div className="group">
            <Square
              ref={e => (refs[StageFormat.SQUARE] = e)}
              onClick={() => storeStageFormat(StageFormat.SQUARE)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Square>
            <span className="m-2 block group-hover:text-primary text-2xl">
              Square
            </span>
          </div>
          <div className="group">
            <Mobile
              ref={e => (refs[StageFormat.MOBILE] = e)}
              onClick={() => storeStageFormat(StageFormat.MOBILE)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Mobile>
            <span className="m-2 block group-hover:text-primary text-2xl">
              9:16
            </span>
          </div>
          <div className="group">
            <Desktop
              ref={e => (refs[StageFormat.DESKTOP] = e)}
              onClick={() => storeStageFormat(StageFormat.DESKTOP)}
              className="border-secondary m-auto group-hover:border-primary focus:border-primary-dark active:border-primary-dark focus:outline-none"
            ></Desktop>
            <span className="m-2 block group-hover:text-primary text-2xl">
              16:9
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Square = styled.button`
  width: 120px;
  height: 120px;
  border: 2px solid;
`;
const Mobile = styled.button`
  width: 90px;
  height: 160px;
  border: 2px solid;
`;
const Desktop = styled.button`
  width: 160px;
  height: 90px;
  border: 2px solid;
`;
