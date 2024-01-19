import styled from "styled-components";

export const Section = styled.section`
  width: 339px;
  padding: 20px;
  background-color: var(--main-gray-color);
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 600px;
    padding: 40px 64px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  letter-spacing: 0.64px;
  margin-top: 40px;
  margin-bottom: 20px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 64px;
    font-weight: 700;
    line-height: 0.9375;
    letter-spacing: 1.28px;
    margin-top: 157px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 107px;
  }
`;

export const Span = styled.span`
  color: rgba(227, 227, 227, 0.5);
`;
