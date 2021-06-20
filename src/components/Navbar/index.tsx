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
          <S.NavLogo
            to='hero'
            spy
            smooth
            offset={-80}
            duration={800}
          >
            dolla
          </S.NavLogo>

          <S.MobileIcon onClick={toggle}>
            <FaBars />
          </S.MobileIcon>

          <S.NavMenu>
            <S.NavItem>
              <S.NavLinks
                to='about'
                spy
                smooth
                offset={-80}
                duration={800}
                activeClass='active'
              >
                About
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to='discover'
                spy
                smooth
                offset={-80}
                duration={800}
                activeClass='active'
              >
                Discover
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to='services'
                spy
                smooth
                offset={-80}
                duration={800}
                activeClass='active'
              >
                Services
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks
                to='signup'
                spy
                smooth
                offset={-80}
                duration={800}
                activeClass='active'
              >
                Sing Up
              </S.NavLinks>
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
