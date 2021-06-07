import { Helmet } from 'react-helmet-async';
import { ShapeBox, StageFrame } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useLocalStorage } from 'utils/localStorage';
import { useState, useEffect } from 'react';
import { StageSize } from 'types/artwork/studio';

type StudioPageProps = {
  type: string;
};

export const StudioPage: React.FC<StudioPageProps> = ({ type = 'shape' }) => {
  const [localSize] = useLocalStorage('stageSize', 'square');
  const [size, setSize] = useState(StageSize.SQUARE);

  useEffect(() => {
    setSize(localSize);
  }, [localSize]);

  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      <PageWrapper>
        <StageFrame size={size} />
        {type === 'shape' && <ShapeBox />}
      </PageWrapper>
    </>
  );
};
