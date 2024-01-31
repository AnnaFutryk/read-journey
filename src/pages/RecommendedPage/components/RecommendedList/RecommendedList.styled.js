import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: var(--main-gray-color);
  border-radius: 30px;
  padding: 40px 20px;
  margin-top: 10px;

  @media (min-width: 768px) {
    padding: 40px;
    margin-top: 16px;
  }

  @media (min-width: 1280px) {
    width: 847px;
    padding-bottom: 28px;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.4px;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: 0.56px;
    margin-bottom: 28px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 40px;
  right: 20px;

  @media (min-width: 768px) {
    right: 40px;
  }
`;

export const Btn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background-color: transparent;
  color: var(--white-color);

  &:disabled {
    color: rgba(249, 249, 249, 0.2);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BooksList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 24px;
    flex-wrap: wrap;
    row-gap: 28px;
    width: 624px;
  }

  @media (min-width: 1280px) {
    gap: 20px;
    row-gap: 26px;
    width: 767px;
  }
`;
