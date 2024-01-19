import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const LogoTxt = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.36px;
  text-transform: uppercase;

  @media (max-width: 375px) {
    display: none;
  }
`;
