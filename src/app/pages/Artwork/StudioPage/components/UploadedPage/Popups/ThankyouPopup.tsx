import { CloseButton } from 'app/components/CloseButton';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  onClose: Function;
};

export const ThankyouPopup = ({ isOpen, onClose }: Props) => {
  return isOpen ? (
    <>
      <div className="justify-center top-1/4 w-screen left-0 right-0 flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none">
        <Container className="relative sm:w-7/12 w-10/12 max-w-screen-md">
          <div className="sm:w-1/2 w-9/12  m-auto py-20 flex flex-col items-center">
            <CloseButton
              className="absolute top-2 right-2 float-right p-1"
              iconClasses="w-4 h-4"
              onClose={onClose}
            />
            <div className="relative flex flex-col justify-center w-full mb-4 text-lg">
              <p className="text-center">Thank you!</p>
              <p className="text-center mb-3">
                Our team will now review your artwork and you will be notified
                once it has been posted on our
                <br />
                Virtual Gallery Wall.
              </p>
            </div>
            <Button
              type="submit"
              className="bg-orange text-sm font-sans uppercase rounded-3xl px-8 py-3 focus:outline-none"
              onClick={() => onClose()}
            >
              Close
            </Button>
          </div>
        </Container>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-gray-dark"></div>
    </>
  ) : (
    <></>
  );
};

const Button = styled.button`
  &: disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Container = styled.div`
  background: #e3e1e4;
`;
