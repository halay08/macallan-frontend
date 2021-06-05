import { Helmet } from 'react-helmet-async';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Macallan - Create Your Own homepage"
        />
      </Helmet>
      <PageWrapper>
        <Masthead />
      </PageWrapper>
    </>
  );
}
