import { Helmet } from 'react-helmet-async';
import { Shape } from './components';
import { PageWrapper } from 'app/components/PageWrapper';

export const StudioPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Own - Studio</title>
        <meta name="description" content="Create Your Own - Studio" />
      </Helmet>
      <PageWrapper>
        <Shape />
      </PageWrapper>
    </>
  );
};
