import styled from 'styled-components/macro';

type IconProps = {
  src: string;
  width?: number;
};

export const Icon: React.FC<IconProps> = ({ src, width = 35 }) => {
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
