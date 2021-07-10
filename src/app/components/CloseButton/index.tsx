import { ReactComponent as CloseSvg } from './assets/close.svg';

type Props = {
  className: string;
  iconClasses?: string;
  onClose: Function;
};

export const CloseButton = ({
  className,
  iconClasses = 'w-3 h-3 sm:w-4 sm:h-4',
  onClose = () => ''
}: Props) => {
  return (
    <button
      className={`bg-transparent leading-none outline-none focus:outline-none ${className}`}
      onClick={() => onClose()}
    >
      <CloseSvg className={iconClasses} />
    </button>
  );
};
