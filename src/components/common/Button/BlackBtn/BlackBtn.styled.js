import styled from "styled-components";

export const Btn = styled.button`
  color: var(--white-color);
  background-color: transparent;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.285;
  letter-spacing: 0.28px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  transition: background-color var(--transition), color var(--transition),
    border var(--transition);

  @media (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.125;
    letter-spacing: 0.32px;
  }

  &:hover,
  &:focus {
    background-color: var(--white-color);
    color: var(--main-gray-color);
    border: 1px solid transparent;
  }
`;
