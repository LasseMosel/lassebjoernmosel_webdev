import React from "react";
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoutes,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="profile" onClick={toggle}>
            Profil
          </SidebarLink>
          <SidebarLink to="cv" onClick={toggle}>
            CV
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoutes to="/signin">Sign In</SidebarRoutes>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
