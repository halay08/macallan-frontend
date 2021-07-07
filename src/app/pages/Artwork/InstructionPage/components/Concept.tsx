import conceptPng from '../assets/concept.png';
import styled from 'styled-components/macro';

export const Concept = () => {
  return <ConceptWrapper className="h-20 md:h-28 mx-auto" src={conceptPng} />;
};

const ConceptWrapper = styled.img``;
