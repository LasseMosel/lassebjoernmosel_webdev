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
