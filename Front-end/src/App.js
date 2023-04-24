import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import SkinCare from "./Pages/SkinCare";
import BodyCare from "./Pages/BodyCare";
import Price from "./Pages/Prices";
import Bridal from "./Pages/Bridal";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
function App() {
  const [user, setLoginUser] = useState({})

  const handleSignOut = () => {
    setLoginUser({});
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exect path="/" element={user && user._id ? <Home user={user} onSignOut={handleSignOut} /> : <Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services/haircare" element={<Services />} />
          <Route path="/services/skincare" element={<SkinCare />} />
          <Route path="/services/bodycare" element={<BodyCare />} />
          <Route path="/services/bodycare" element={<Services />} />
          <Route path="/services/bridal" element={<Bridal />} />
          <Route path="/price" element={<Price />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
