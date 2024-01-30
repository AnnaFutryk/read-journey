import { Form, Field } from "formik";
import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2851;
    letter-spacing: -0.28px;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 295px;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }
`;

export const InputWrapp = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 14px;
  color: var(--light-gray-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
  letter-spacing: -0.28px;
`;

export const Input = styled(Field)`
  width: 100%;
  display: block;
  padding: 14px;
  ${(props) =>
    props.customPadding &&
    css`
      padding-left: ${props.customPadding};
    `}
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;
  border: 1px solid transparent;
  color: var(--white-color);
  background-color: var(--deep-gray-color);
  transition: border var(--transition);

  @media (min-width: 768px) {
    padding: 16px 14px;
    ${(props) =>
      props.customMediaPadding &&
      css`
        padding-left: ${props.customMediaPadding};
      `}
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  &:focus,
  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  &::placeholder {
    color: var(--white-color);
  }
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
  width: 102px;

  @media (min-width: 768px) {
    width: 126px;
  }
`;
