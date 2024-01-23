import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
  }
`;

export const TxtBlock = styled.div`
  max-width: 335px;
  height: 411px;
  padding: 20px;
  background-color: var(--main-gray-color);
  border-radius: 30px;

  @media (min-width: 768px) {
    max-width: 704px;
    height: 960px;
    padding: 40px 128px 40px 64px;
  }

  @media (min-width: 1280px) {
    max-width: 600px;
    min-width: 600px;
    height: 742px;
    padding-right: 64px;
  }
`;

export const Title = styled.h1`
  font-size: 31px;
  letter-spacing: 0.64px;
  margin-top: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1;

  @media (min-width: 768px) {
    width: 444px;
    font-size: 64px;
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

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  max-width: 335px;
  height: 351px;
  padding: 20px 40px;
  background-color: var(--main-gray-color);
  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 1279.9px) {
    display: none;
  }

  @media (min-width: 1280px) {
    max-width: 600px;
    height: 736px;
    padding: 80px 98px;
  }
`;
