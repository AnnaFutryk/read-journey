import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  min-width: 320px;
  padding: 32px;

  @media (max-width: 375px) {
    padding: 20px;
  }
`;
