import conceptPng from '../assets/concept.png';
import styled from 'styled-components/macro';

export const Concept = ({
  className = 'h-16 md:h-20 mx-auto'
}: {
  className?: string;
}) => {
  return <ConceptWrapper className={className} src={conceptPng} />;
};

const ConceptWrapper = styled.img``;
