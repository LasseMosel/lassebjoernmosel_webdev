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
} from "./CVElements.js";
import FlipCard from "../FlipCard";
import { ProfileObjOne } from "../FlipCard/data";
// import {
//   Column2,
//   ImgWrap,
//   InfoContainer,
//   InfoWrapper,
//   InfoRow,
//   Column1,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   Img,
// } from "../InfoSection/InfoElements";
import Timeline from "../Timeline";

const Profilepage = ({
  lightBackground,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  description0,
  description1,
  description2,
  img,
  alt,
}) => {
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
      {/* <ImgContainer>
        <FlipCard {...ProfileObjOne} />
      </ImgContainer>
      <ProfileContainer>
        <NameHeader>Lasse Bjørn Mosel</NameHeader>
        <JobTitle>Frontend udvikler - JYSK</JobTitle>
      </ProfileContainer> */}
      {/* <InfoContainer lightBackground={lightBackground} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description0}</Subtitle>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> */}
      <Timeline></Timeline>
    </PageContainer>
  );
};

export default Profilepage;
