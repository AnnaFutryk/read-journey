import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 53.33%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: var(--main-gray-color);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 34px;
  right: 40px;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: var(--white-color);
  z-index: 1;
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--light-gray-color);
  line-height: 1.125;
  letter-spacing: -0.32px;
  transition: color 250ms linear;

  &:hover {
    color: var(--white-color);
  }
  &.active {
    color: var(--white-color);

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--blue-color);
      border-radius: 5px;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
`;

export const LogOutWrapp = styled.div`
  margin-top: auto;
  margin-bottom: 40px;
`;
