import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvaWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(249, 249, 249, 0.2);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.125;
  letter-spacing: -0.32px;
`;

export const Name = styled.p`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.125;
    letter-spacing: -0.32px;
  }
`;
