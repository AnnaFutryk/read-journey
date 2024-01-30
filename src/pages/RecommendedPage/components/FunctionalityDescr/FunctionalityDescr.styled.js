import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--deep-gray-color);
  border-radius: 12px;

  @media (min-width: 768px) {
    margin: 0;
    margin-top: 20px;
    width: 313px;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
    margin-bottom: 40px;
  }
`;

export const TxtContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Number = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px 15px;
  text-align: center;
  border-radius: 50%;
  background-color: var(--white-color);
  color: var(--main-gray-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }
`;

export const Txt = styled.p`
  color: var(--light-gray-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    width: 197px;
  }
`;

export const Span = styled.span`
  color: var(--white-color);
`;

export const LinksWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: var(--light-gray-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
  transition: color var(--transition);

  &:hover {
    color: var(--white-color);
  }
`;
