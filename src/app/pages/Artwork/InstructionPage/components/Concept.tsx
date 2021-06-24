import conceptPng from '../assets/concept.png';
import styled from 'styled-components/macro';

export const Concept = () => {
  return <ConceptWrapper src={conceptPng} />;
};

const ConceptWrapper = styled.img`
  width: 100%;
`;
