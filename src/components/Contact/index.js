import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavBtn,
  Nav,
  ContainerNavbar,
  PageContainer,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./ContactElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = ({
  lightBackground,
  id,
  imgStart,
  lightText,
  darkText,
  headline,
  topLine,
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
            <NavLogo>Kontakt information</NavLogo>
            <NavBtn>
              <NavBtnLink to="/">Tilbage</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </ContainerNavbar>
      </Nav>
      <InfoContainer lightBackground={lightBackground} id={id}>
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
      </InfoContainer>

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
