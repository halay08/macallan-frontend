import { ReactComponent as StartBtnSvg } from '../assets/start-btn.svg';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

export const StartButton = () => {
  const history = useHistory();

  const gotoFormatPage = () => {
    let path = `/artwork/format`;
    history.push(path);
  };

  return (
    <Button onClick={() => gotoFormatPage()}>
      <StartButtonStyled className="mb-10" />
    </Button>
  );
};

const Button = styled.button``;

const StartButtonStyled = styled(StartBtnSvg)`
  width: 129px;
`;
