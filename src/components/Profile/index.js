import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavBtn,
  Nav,
  ContainerNavbar,
  PageContainer,
  NameHeader,
  JobTitle,
  ProfileContainer,
  ImgContainer,
} from "./ProfileElements";
import FlipCard from "../FlipCard";
import { ProfileObjOne } from "../FlipCard/data";
import { HomeObjOne } from "./data";
import InfoSection from "../InfoSection";

const Profilep = ({ toggle }) => {
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
            <NavLogo to="/">Profil</NavLogo>
            <NavBtn>
              <NavBtnLink to="/">Tilbage</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </ContainerNavbar>
      </Nav>
      <ImgContainer>
        <FlipCard {...ProfileObjOne} />
      </ImgContainer>
      <ProfileContainer>
        <NameHeader>Lasse Bjørn Mosel</NameHeader>
        <JobTitle>Frontend udvikler - JYSK</JobTitle>
      </ProfileContainer>
      {/* <InfoSection {...HomeObjOne} /> */}
    </PageContainer>
  );
};

export default Profilep;
