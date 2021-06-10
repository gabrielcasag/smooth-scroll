import React from 'react';

import * as S from './styles';

interface ISidebarProps {
  toggle: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ toggle, isSidebarOpen }) => (
  <S.SidebarContainer isOpen={isSidebarOpen}>
    <S.Icon>
      <S.CloseIcon onClick={toggle} />
    </S.Icon>

    <S.SidebarWrapper>
      <S.SidebarMenu>
        <S.SidebarLink to="about">About</S.SidebarLink>
        <S.SidebarLink to="about">About</S.SidebarLink>
        <S.SidebarLink to="about">About</S.SidebarLink>
        <S.SidebarLink to="about">About</S.SidebarLink>
      </S.SidebarMenu>
    </S.SidebarWrapper>

    <S.SidebarBtnWrapper>
      <S.SidebarBtn to="/signin">Sign In</S.SidebarBtn>
    </S.SidebarBtnWrapper>
  </S.SidebarContainer>
);

export default Sidebar;
