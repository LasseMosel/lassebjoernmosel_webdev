import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProfileSection from "../components/InfoSection/profileSection";
import CvSection from "../components/InfoSection/cvSection";
import ContactSection from "../components/InfoSection/contactSection";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../components/InfoSection/data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProfileSection {...HomeObjOne} />
      <CvSection {...HomeObjTwo} />
      <Services />
      <ContactSection {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
