import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const PageContainer = styled.div`
  /* background: #0c0c0c; */
  background: #010606;

  width: 100%;
  height: max-content;
`;

export const ContainerNavbar = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  //Trigger on this screenSize
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
  background: #000;
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-end;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const NameHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  padding: 15px;
`;

export const JobTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  padding: 15px;
`;

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkA = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  /* max-width: 1000px; */
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 100px;
  /* margin-right: 200px; */
  padding-bottom: 100px;

  @media screen and (max-width: 800px) {
    font-size: 75px;
  }
`;
