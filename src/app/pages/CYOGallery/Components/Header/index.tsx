import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderWrapper className="sticky z-10 top-0">
      <div className="flex flex-row items-center justify-between border-b border-gray-light border-solid bg-white h-16"></div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;
