import { ReactComponent as ConceptSvg } from '../assets/concept.svg';
import styled from 'styled-components/macro';

export const Concept = () => {
  return <ConceptWrapper />;
};

const ConceptWrapper = styled(ConceptSvg)`
  width: 255px;
`;
