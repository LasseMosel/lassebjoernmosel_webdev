import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  width: 150px;
  box-shadow: 0 0 15px 0;
  margin-top: 30px;
  overflow: hidden;

  box-shadow: 0 0 15px --5px;

  &:hover {
    transform: scale(1.7);
    box-shadow: 0 0 15px 0 #01bf71;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 200px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const CardH3 = styled.h3``;

export const CardP = styled.p``;

export const CardTitle = styled.div``;

export const CardBody = styled.div``;
