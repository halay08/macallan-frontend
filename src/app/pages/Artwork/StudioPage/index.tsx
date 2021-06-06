import { Helmet } from 'react-helmet-async';
import { ShapeBox, Stage } from './components';
import { PageWrapper } from 'app/components/PageWrapper';
import { useLocalStorage } from 'utils/localStorage';

type StudioPageProps = {
  type: string;
};

export const StudioPage: React.FC<StudioPageProps> = ({ type = 'shape' }) => {
  const [stageSize] = useLocalStorage('stageSize', 'square');

  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      <PageWrapper>
        <Stage size={stageSize} className="mb-1"></Stage>
        {type === 'shape' && <ShapeBox />}
      </PageWrapper>
    </>
  );
};
