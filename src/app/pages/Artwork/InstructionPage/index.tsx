import { Instruction } from './components/Instruction';
import { Helmet } from 'react-helmet-async';

export const InstructionPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Own - Instruction</title>
        <meta name="description" content="Create Your Own - Instruction" />
      </Helmet>
      <Instruction />
    </>
  );
};
