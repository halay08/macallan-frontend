import ContinueToShare from './assets/continue.png';
import StartAgain from './assets/start-again.png';

type Props = {
  onContinue: Function;
  onStartAgain: Function;
};

export const ThankyouMobile = ({ onContinue, onStartAgain }: Props) => {
  return (
    <div className="items-stretch justify-between w-full h-full">
      <div className="my-auto px-4 text-lg flex flex-col items-center">
        <div className="text-center text-xl">
          Thank you for your participation
        </div>
        <button
          className="w-11/12 focus:outline-none select-none"
          onClick={() => onContinue()}
        >
          <img src={ContinueToShare} alt="continue to share" />
        </button>
        <button
          className="w-11/12 -mt-6 focus:outline-none select-none"
          onClick={() => onStartAgain()}
        >
          <img src={StartAgain} alt="start again" />
        </button>
      </div>
    </div>
  );
};
