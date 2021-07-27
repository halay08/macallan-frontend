import styled from 'styled-components/macro';

type IconProps = {
  src: string;
  width?: number;
};

export const Icon: React.FC<IconProps> = ({ src, width = 40 }) => {
  return (
    <Wrapper
      src={src}
      width={width}
      className="flex flex-row items-center justify-between"
    ></Wrapper>
  );
};

const Wrapper = styled.div<{ src: string; width: number }>`
  background: url('${({ src }) => src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
`;
