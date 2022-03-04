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
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./ContactElements";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import ContactSection from "../InfoSection/contactSection";
import { HomeObjThree } from "./data";

const ContactPage = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <PageContainer>
      <Nav scrollNav={scrollNav}>
        <ContainerNavbar>
          <NavbarContainer>
            <NavLogo>Kontakt information</NavLogo>
            <NavBtn>
              <NavBtnLink to="/">Tilbage</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </ContainerNavbar>
      </Nav>

      <ContactSection {...HomeObjThree}></ContactSection>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/lasse.mosel/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/lasse.mosel/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/channel/UCFYEpJMjS3SCkm-BqaOHVeQ/featured"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/lassebmosel/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </PageContainer>
  );
};

export default ContactPage;
