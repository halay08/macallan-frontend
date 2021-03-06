import quoteStart from '../assets/CYO_quote_start.png';
import quoteEnd from '../assets/CYO_quote_end.png';
import styled from 'styled-components/macro';

export const Quote = () => {
  return (
    <>
      <QuoteIcon
        alt="quote-start"
        className="absolute -top-4 left-0 md:-left-20 h-20 md:h-full"
        src={quoteStart}
      />
      <QuoteIcon
        alt="quote-end"
        className="absolute -bottom-4 right-0 md:-right-20 h-20 md:h-full"
        src={quoteEnd}
      />
      <Content className="font-primary-italic tracking-wider">
        The best work comes from trusting your intuition and your gut, and what
        your heart is telling you
      </Content>
    </>
  );
};

const QuoteIcon = styled.img`
  z-index: -1;
`;

const Content = styled.p`
  font-size: 26px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
