import styled from 'styled-components/macro';

type IconProps = {
  src: string;
  width?: number;
};

export const Bottle: React.FC<IconProps> = ({ src, width = 23 }) => {
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
