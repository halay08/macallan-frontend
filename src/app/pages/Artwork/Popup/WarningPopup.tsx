import styled from 'styled-components';

export const WarningPopup = ({ message, isOpen }) => {
  return (
    isOpen && (
      <>
        <Wrapper className="justify-center w-screen fixed z-50 flex outline-none focus:outline-none left-0">
          <Container className="relative sm:w-7/12 w-10/12 max-w-screen-lg m-auto">
            <div className="w-10/12 m-auto py-16 flex flex-col items-center text-lg text-center">
              {message}
            </div>
          </Container>
        </Wrapper>
        <div className="opacity-70 fixed inset-0 z-40 bg-gray-dark"></div>
      </>
    )
  );
};

const Container = styled.div`
  background: #e3e1e4;
`;

const Wrapper = styled.div`
  bottom: 5%;
  top: 5%;
  max-height: 90%;
`;
