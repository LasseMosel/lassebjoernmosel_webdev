import React from "react";
import Profile from "../components/Profile";
import ScrollToTop from "../components/ScrollToTop";
import { HomeObjOne } from "../components/Profile/data";

const ProfilePage = () => {
  return (
    <>
      <ScrollToTop />
      <Profile {...HomeObjOne} />
    </>
  );
};

export default ProfilePage;
