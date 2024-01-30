import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  background-color: var(--main-gray-color);

  @media (min-width: 768px) {
    padding: 32px;
    display: flex;
    gap: 32px;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    width: 353px;
    padding: 40px 20px 20px 20px;
    display: block;
    margin: 0;
  }
`;
