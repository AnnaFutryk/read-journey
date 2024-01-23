import styled from "styled-components";

export const Btn = styled.button`
  width: ${(props) => props.width};
  color: var(--main-gray-color);
  background-color: var(--white-color);
  padding: 12px 29px;
  display: inline-block;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.285;
  letter-spacing: 0.28px;
  border: 1px solid transparent;
  transition: background-color var(--transition), color var(--transition),
    border var(--transition);

  @media (min-width: 768px) {
    padding: 16px 54px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.4px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    color: var(--white-color);
    border: 1px solid rgba(249, 249, 249, 0.2);
  }
`;
