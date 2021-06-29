import { ReactComponent as LoaderIcon } from './assets/loader.svg';

export const Loader = ({ isLoading, children }) => {
  const classNames = loading => {
    const loadingClass = loading ? `opacity-60 z-10` : 'opacity-0';
    return `bg-white fixed w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-650 ease-in-out ${loadingClass}`;
  };

  return (
    <div className="w-full h-full">
      <div
        style={!isLoading ? { zIndex: -1 } : undefined}
        className={classNames(isLoading)}
      >
        <LoaderIcon />
      </div>
      {children}
    </div>
  );
};
