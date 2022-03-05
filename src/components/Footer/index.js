import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkA,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Nyttige links</FooterLinkTitle>
              <FooterLink to="/">Hjem </FooterLink>
              <FooterLink to="/profile">Profil </FooterLink>
              <FooterLink to="/cv">CV</FooterLink>
              <FooterLink to="/Kontakt">Kontakt </FooterLink>
              <FooterLink to="/signIn">Sign In </FooterLink>
              <FooterLinkA
                href="https://www.instagram.com/lasse.mosel/"
                target="_blank"
              >
                LasseMosel instagram
              </FooterLinkA>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signIn">How it works </FooterLink>
              <FooterLink to="/signIn">Testi </FooterLink>
              <FooterLink to="/signIn">Carrerer</FooterLink>
              <FooterLink to="/signIn">Investment </FooterLink>
              <FooterLink to="/signIn">services </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signIn">How it works </FooterLink>
              <FooterLink to="/signIn">Testi </FooterLink>
              <FooterLink to="/signIn">Carrerer</FooterLink>
              <FooterLink to="/signIn">Investment </FooterLink>
              <FooterLink to="/signIn">services </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signIn">How it works </FooterLink>
              <FooterLink to="/signIn">Testi </FooterLink>
              <FooterLink to="/signIn">Carrerer</FooterLink>
              <FooterLink to="/signIn">Investment </FooterLink>
              <FooterLink to="/signIn">services </FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Lasse
            </SocialLogo>
            <WebsiteRights>
              webRights © {new Date().getFullYear()} all rigths reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
