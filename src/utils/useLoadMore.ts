import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const useLoadMore = (handleLoadMore: Function, setData: Function) => {
  const [lastDocumentId, setLastDocumentId] = useState<string>('');
  const [isStop, setIsStop] = useState<boolean>(false);

  useBottomScrollListener(
    () => {
      if (isStop) return;
      setIsStop(true);
      handleLoadMore(lastDocumentId);
    },
    {
      offset: 100,
      debounce: 200,
      debounceOptions: { leading: false }
    }
  );

  const handleAfterGet = data => {
    const { items = [], pagination = {}, option = {} } = data;
    if (!pagination.totalItemOfPage) {
      setIsStop(true);
      return;
    }
    setData(prevState => [...prevState, ...items]);
    setLastDocumentId(pagination.lastRef || '');
    setIsStop(pagination.totalItemOfPage < option.limit);
  };

  return [handleAfterGet];
};

export { useLoadMore };
