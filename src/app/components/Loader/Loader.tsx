import { ReactComponent as LoaderIcon } from './assets/loader.svg';

export const Loader = ({ isLoading, children }) => {
  const classNames = loading => {
    const loadingClass = loading ? `opacity-60 z-10` : 'opacity-0 z-0';
    return `bg-white absolute w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-650 ease-in-out ${loadingClass}`;
  };

  return (
    <div>
      <div className={classNames(isLoading)}>
        <LoaderIcon />
      </div>
      {children}
    </div>
  );
};
