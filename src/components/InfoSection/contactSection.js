import React from "react";
import { ButtonLink, ButtonScroll } from "../ButtonElements";
import {
  Column2,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  HorizontalDivider,
} from "./InfoElements";

const ContactSection = ({
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
  to,
  buttonLabel,
  buttonLabelGotoHome,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
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
                <BtnWrap>
                  <ButtonLink
                    to="/contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonLink>
                  <HorizontalDivider />
                  <ButtonScroll
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabelGotoHome}
                  </ButtonScroll>
                </BtnWrap>
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
    </>
  );
};

export default ContactSection;
