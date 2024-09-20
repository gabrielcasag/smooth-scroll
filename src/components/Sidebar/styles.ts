import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

interface ISidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<ISidebarProps>`
  position: fixed;
  /* top: 0; */
  left: 0;

  width: 100%;
  height: 100%;
  background: #0d0d0d;

  display: grid;
  align-items: center;

  transition: 0.3s ease-in-out;
  z-index: 99;

  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.8rem;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;

  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled.span`
  border-radius: 50px;
  background: #01bf71;
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
  padding: 0.8rem 2rem;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;
