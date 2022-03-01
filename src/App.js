import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signIn";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signIn" element={<SignInPage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
