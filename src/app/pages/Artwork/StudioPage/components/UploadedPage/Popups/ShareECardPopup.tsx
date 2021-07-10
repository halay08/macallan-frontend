import { CloseButton } from 'app/components/CloseButton';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  submitHandler: Function;
  onClose: Function;
};

type TContact = {
  name: string;
  email: string;
};

type TAgreeCheck = {
  tAndCs: boolean;
  policy: boolean;
};

export const ShareECardPopup = ({ isOpen, onClose, submitHandler }: Props) => {
  const [contact, setContact] = useState<TContact>({ name: '', email: '' });
  const [agreeCheck, setAgreeCheck] = useState<TAgreeCheck>({
    tAndCs: false,
    policy: false
  });
  const [disable, setDisable] = useState(false);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setContact({ ...contact, [name]: value });
  };

  const onAgreementCheck = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name } = ev.target;
    setAgreeCheck({ ...agreeCheck, [name]: !agreeCheck[name] });
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    setDisable(true);
    ev.preventDefault();
    await submitHandler(contact);
    setDisable(false);
  };

  const isSubmittable = [
    ...Object.values(contact),
    ...Object.values(agreeCheck)
  ].every(value => Boolean(value));

  return isOpen ? (
    <>
      <form onSubmit={onSubmit}>
        <div className="justify-center sm:top-20 top-24 w-screen left-0 right-0 flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none">
          <Container className="relative sm:w-6/12 w-10/12 max-w-screen-md sm:text-base text-lg">
            <div className="sm:w-1/2 w-10/12  m-auto sm:py-16 py-12 flex flex-col items-center">
              <CloseButton
                className="absolute top-2 right-2 float-right p-1"
                iconClasses="w-4 h-4"
                onClose={onClose}
              />
              <div className="relative flex flex-col justify-center w-full">
                <p className="text-center mb-3">
                  Before we publish your artwork, could you tell us:
                </p>
                <input
                  className="px-4 py-1 focus:outline-none rounded-3xl border border-gray-light mb-3"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={onChange}
                  value={contact.name}
                />
                <input
                  className="px-4 py-1 focus:outline-none rounded-3xl border border-gray-light mb-6"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={onChange}
                  value={contact.email}
                />
              </div>
              <div className="flex flex-col mb-3">
                <p className="text-center mb-3">And agree to the following:</p>
                <Label className="flex items-center" htmlFor="tAndCs">
                  I agree with The Macallan Create Your Own{' '}
                  <a href="/" target="_blank" className="underline text-red">
                    T&Cs
                  </a>
                  <Input
                    name="tAndCs"
                    id="tAndCs"
                    type="checkbox"
                    checked={agreeCheck.tAndCs}
                    onChange={onAgreementCheck}
                  />
                  <CheckMark></CheckMark>
                </Label>
                <Label className="flex items-center" htmlFor="policy">
                  I agree with Edrington's data collection and{' '}
                  <a href="/" target="_blank" className="underline text-red">
                    privacy policy
                  </a>
                  <Input
                    name="policy"
                    id="policy"
                    type="checkbox"
                    checked={agreeCheck.policy}
                    onChange={onAgreementCheck}
                  />
                  <CheckMark></CheckMark>
                </Label>
              </div>
              <Button
                type="submit"
                className="bg-orange text-sm font-sans uppercase rounded-3xl px-8 py-3 focus:outline-none"
                disabled={!isSubmittable || disable}
              >
                Submit artwork
              </Button>
            </div>
          </Container>
        </div>
      </form>
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

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckMark = styled.span`
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid #dddddd;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  // font-size: 12px;
  // letter-spacing: 1px;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.25rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input:checked ~ ${CheckMark}:after {
    display: block;
  }
  & ${CheckMark}:after {
    left: 5px;
    top: 1px;
    width: 7px;
    height: 12px;
    border: solid #252525;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
