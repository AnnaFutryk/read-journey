import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-gray-color);
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 20px 20px 0px 20px;

  @media (min-width: 768px) {
    margin: 32px 32px 0px 32px;
  }
`;

export const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BurgerBtn = styled.button`
  background-color: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.6);
`;

export const LogOutWrapp = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
