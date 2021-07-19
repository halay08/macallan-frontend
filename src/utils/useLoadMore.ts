import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const useLoadMore = (getMoreData: Function, setData: Function) => {
  const [lastDocumentId, setLastDocumentId] = useState<string>('');
  const [isStop, setIsStop] = useState<boolean>(false);

  useBottomScrollListener(() => handleGetData(), {
    offset: 100,
    debounce: 200,
    debounceOptions: { leading: false }
  });

  const handleGetData = async (reset = false) => {
    if (isStop && !reset) return;
    setIsStop(true);
    const newData = await getMoreData(reset ? '' : lastDocumentId);
    handleAfterGet(newData);
  };

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

  return [handleGetData];
};

export { useLoadMore };
