import styled from 'styled-components/macro';

export function Introduction() {
  return (
    <Wrapper>
      <Background alt="CYO_background" src="/CYO/01_intro_background@3x.png" />
      <Concept alt="CYO_concept" src="/CYO/01_intro_concept3@3.png" />
      <Content className="font-AGaramondPro-regular px-4">
        Unleash your inner creativity to create your own art work here.
      </Content>
      <Button>
        <img alt="CYO_start_button" src="/CYO/01_btn_start@3.png" />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Background = styled.img`
  position: relative;
`;

const Concept = styled.img`
  position: absolute;
  top: 65%;
  width: 70%;
`;

const Content = styled.p`
  position: absolute;
  top: 75%;
  text-align: center;
  font-size: 20px;
  line-height: 1.25;
`;

const Button = styled.button`
  position: absolute;
  top: 83%;
  width: 35%;
`;
