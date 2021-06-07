import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  position: sticky;
  top: 0;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100%; //80px
  width: 100%;
  max-width: 1100px;

  padding: 0 1.5rem;

  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-self: flex-start;

  margin-left: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    transform: translate(-100%, 70%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style-type: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%; //80px
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  padding: 0.6rem 1.6rem;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
