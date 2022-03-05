import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavBtn,
  Nav,
  ContainerNavbar,
  PageContainer,
} from "./CVElements.js";

import Timeline from "../Timeline";

const Profilepage = ({}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <PageContainer>
      <Nav scrollNav={scrollNav}>
        <ContainerNavbar>
          <NavbarContainer>
            <NavLogo>CV</NavLogo>
            <NavBtn>
              <NavBtnLink to="/">Tilbage</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </ContainerNavbar>
      </Nav>
      <Timeline></Timeline>
    </PageContainer>
  );
};

export default Profilepage;
