import { Instruction } from './components';
import { PageWrapper } from 'app/components/PageWrapper';

export const InstructionPage = () => {
  return (
    <PageWrapper hasFooter={false} hasHeader={false}>
      <Instruction />
    </PageWrapper>
  );
};
