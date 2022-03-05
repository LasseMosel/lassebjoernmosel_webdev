import React from "react";
import Contactpage from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import { HomeObjThree } from "../components/Contact/data";

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Contactpage {...HomeObjThree} />
    </>
  );
};

export default ContactPage;
