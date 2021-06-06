import { Instruction } from './components';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';

export const InstructionPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Own - Instruction</title>
        <meta name="description" content="Create Your Own - Instruction" />
      </Helmet>
      <PageWrapper
        hasFooter={false}
        hasHeader={false}
        showNextButton={false}
        showPrevButton={false}
      >
        <Instruction />
      </PageWrapper>
    </>
  );
};
