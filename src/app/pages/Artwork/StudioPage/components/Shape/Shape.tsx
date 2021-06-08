import styled from 'styled-components/macro';

type ShapeProps = {
  src: string;
  width?: number;
};

export const Shape: React.FC<ShapeProps> = ({ src, width = 60 }) => {
  return (
    <Wrapper className="flex flex-row items-center justify-between">
      <Image
        src={src}
        className="cursor-pointer max-w-max"
        style={{ width: `${width}px` }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Image = styled.img``;
