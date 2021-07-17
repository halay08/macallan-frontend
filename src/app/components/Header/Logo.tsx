import { ReactComponent as LogoSvg } from './assets/logo.svg';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

export const Logo = () => {
  const history = useHistory();

  return (
    <div onClick={() => history.push('/')} className="logo m-auto">
      <LogoStyled />
    </div>
  );
};

const LogoStyled = styled(LogoSvg)`
  width: 200px;
`;
