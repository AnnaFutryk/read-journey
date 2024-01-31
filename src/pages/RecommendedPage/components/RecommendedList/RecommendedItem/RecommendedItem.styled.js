import styled from "styled-components";

export const Item = styled.li`
  width: 137px;
  height: 248px;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 8px;
`;

export const BooksTitle = styled.h3`
  margin-top: 8px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Author = styled.p`
  color: var(--light-gray-color);
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
`;
