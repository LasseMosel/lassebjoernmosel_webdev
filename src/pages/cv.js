import React from "react";
import CVpage from "../components/CV";
import ScrollToTop from "../components/ScrollToTop";
import { HomeObjOne } from "../components/Profile/data";

const CvPage = () => {
  return (
    <>
      <ScrollToTop />
      <CVpage {...HomeObjOne} />
    </>
  );
};

export default CvPage;
