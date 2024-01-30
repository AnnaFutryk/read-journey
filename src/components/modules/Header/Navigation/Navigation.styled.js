import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    gap: 40px;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--light-gray-color);
  line-height: 1.125;
  letter-spacing: -0.32px;
  transition: color var(--transition);

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
