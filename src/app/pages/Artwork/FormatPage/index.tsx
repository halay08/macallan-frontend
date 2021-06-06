import { Helmet } from 'react-helmet-async';
import { SizeBox } from './components';
import { PageWrapper } from 'app/components/PageWrapper';

export const FormatPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Own - Select Format</title>
        <meta name="description" content="Create Your Own - Select Format" />
      </Helmet>
      <PageWrapper>
        <SizeBox />
      </PageWrapper>
    </>
  );
};
