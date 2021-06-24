import { Instruction, InstructionDesktop } from './components';
import { Helmet } from 'react-helmet-async';
import { useResponsive } from 'utils/responsive';

export const InstructionPage = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <Helmet>
        <title>Create Your Own - Instruction</title>
        <meta name="description" content="Create Your Own - Instruction" />
      </Helmet>
      {isMobile ? <Instruction /> : <InstructionDesktop />}
    </>
  );
};
