import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signIn";
import ProfilePage from "./pages/profile";
import CvPage from "./pages/cv";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signIn" element={<SignInPage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
        <Route exact path="/cv" element={<CvPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
