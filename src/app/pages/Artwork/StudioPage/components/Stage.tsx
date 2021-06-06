import styled from 'styled-components/macro';
import { StageSize } from 'types/artwork/studio';

interface StageProps {
  size: StageSize;
  className?: string;
}

export const Stage: React.FC<StageProps> = ({ size, className = '' }) => {
  let height: string = '';

  switch (size) {
    case StageSize.MOBILE:
      height = 'calc(100vw * 16 / 9)';
      break;
    case StageSize.DESKTOP:
      height = 'calc(100vw * 9 / 16)';
      break;
    default:
      height = '100vw';
  }

  const Container = styled.div`
    min-height: ${height};
  `;

  return (
    <Wrapper>
      <Container
        className={`flex flex-row items-center justify-between w-screen bg-gray-light ${className}`}
      ></Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: calc(100vh - 363px);
  overflow: auto;
`;
