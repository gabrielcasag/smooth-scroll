import styled from 'styled-components';

export const LinkItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 1rem;

  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0.5rem;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const Link = styled.span`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.85rem;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;
