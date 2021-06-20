import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { FaBars } from 'react-icons/fa';

import * as S from './styles';

interface INavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      return;
    }
    setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <S.Nav scrollNav={scrollNav}>
        <S.NavbarContainer>
          <Link href="/">
            <S.NavLogo>dolla</S.NavLogo>
          </Link>

          <S.MobileIcon onClick={toggle}>
            <FaBars />
          </S.MobileIcon>

          <S.NavMenu>
            <S.NavItem>
              <S.NavLinks to="about">About</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="discover">Discover</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="services">Services</S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="signup">Sing Up</S.NavLinks>
            </S.NavItem>
          </S.NavMenu>

          <S.NavBtn>
            <Link href="/signin">
              <S.NavBtnLink>Sign In</S.NavBtnLink>
            </Link>
          </S.NavBtn>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};
export default Navbar;
