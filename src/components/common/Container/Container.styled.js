import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    padding: 10px 20px 40px 20px;
  }

  @media (min-width: 768px) {
    padding: 16px 32px 32px 32px;
  }
`;
