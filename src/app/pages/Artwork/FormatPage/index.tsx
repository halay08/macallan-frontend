import { Helmet } from 'react-helmet-async';
import { PageContent } from './components/PageContent';
import { PageWrapper } from 'app/components/PageWrapper';

export const FormatPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Own Format - Macallan</title>
        <meta name="description" content="Create Your Own Format - Macallan" />
      </Helmet>
      <PageWrapper>
        <PageContent />
      </PageWrapper>
    </>
  );
};
