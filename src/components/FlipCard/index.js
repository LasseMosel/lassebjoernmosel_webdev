import React from "react";
import {
  CardContainer,
  ImageContainer,
  Img,
  CardTitle,
  CardBody,
  CardH3,
  CardP,
} from "./CardElements";

const Card = ({ title, img, body }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Img src={img}></Img>
        </ImageContainer>
        <CardTitle>
          <CardH3>{title}</CardH3>
        </CardTitle>
        <CardBody>
          <CardP>{body}</CardP>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default Card;
