import React from "react";
import { Dashboard, Home, LoginPage, Profile } from "./feature/pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./feature/components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
