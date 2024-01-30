import styled from "styled-components";

export const Section = styled.section`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    gap: 14px;
    background-color: var(--deep-gray-color);
    border-radius: 12px;
    padding: 15px 20px 14px 20px;
    margin-top: 20px;
  }
`;

export const Book = styled.div`
  font-size: 40px;
`;

export const Txt = styled.p`
  color: var(--light-gray-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
  letter-spacing: -0.28px;
`;

export const Span = styled.span`
  color: var(--white-color);
`;
