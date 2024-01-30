import { Form, Field } from "formik";
import styled, { css } from "styled-components";
import { ReactComponent as ErrorSvg } from "../../../../assets/icons/error.svg";
import { ReactComponent as CheckSvg } from "../../../../assets/icons/check.svg";
import { NavLink } from "react-router-dom";

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  display: block;
  padding: 14px;
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

  ${({ error }) =>
    error === "true" &&
    css`
      border: 1px solid var(--red-color);
    `}
  ${({ success }) =>
    success === "true" &&
    css`
      border: 1px solid var(--green-color);
    `} /* @media (max-width: 768px) {
    width: 240px;
    padding: 12px; */
  /* } */
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  width: 18px;
  height: 18px;
  z-index: 10;
  border: none;
  position: absolute;
  top: 13px;
  right: 16px;
  padding: 0;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    top: 15px;
    right: 18px;
  }
`;

export const ErrorText = styled.p`
  position: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "absolute" : "static"};
  left: ${({ select }) => (select === "true" ? "unset" : "14px")};
  right: ${({ select }) => (select === "true" ? "0" : "unset")};
  bottom: -24px;
  color: var(--red-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  margin-left: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "14px"};
  margin-top: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "8px"};
  white-space: nowrap;
  text-align: ${({ select }) => (select === "true" ? "right" : "left")};
`;

ErrorText.shouldForwardProp = (prop) => prop !== "error";

export const SuccessTxt = styled.p`
  color: var(--green-color);
  font-size: 12px;
  margin-left: 14px;
  margin-top: 8px;
`;

export const ErrorSvgStyled = styled(ErrorSvg)`
  position: absolute;
  top: 15px;
  right: 18px;
`;

export const CheckSvgStyled = styled(CheckSvg)`
  position: absolute;
  top: 15px;
  right: 18px;
  font-weight: 500;
  line-height: 1.16;
`;

export const BtnsBlock = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 68px;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  color: var(--light-gray-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  transition: color var(--transition);

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  &:hover {
    color: var(--white-color);
  }
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

export const BtnContainer = styled.div`
  width: 140px;

  @media (min-width: 768px) {
    width: 225px;
  }
`;
