import ContinueToShare from './assets/continue.png';
import StartAgain from './assets/start-again.png';

type Props = {
  onContinue: Function;
  onStartAgain: Function;
};

export const ThankyouDesktop = ({ onContinue, onStartAgain }: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="my-auto p-24 pt-4 text-lg flex flex-col items-center">
        <div className="text-center text-3xl mb-5">
          Thank you for your participation
        </div>
        <button
          className="w-9/12 focus:outline-none select-none"
          onClick={() => onContinue()}
        >
          <img
            className="mx-auto"
            src={ContinueToShare}
            alt="continue to share"
          />
        </button>
        <button
          className="w-9/12 focus:outline-none select-none"
          onClick={() => onStartAgain()}
        >
          <img className="mx-auto" src={StartAgain} alt="start again" />
        </button>
      </div>
    </div>
  );
};
