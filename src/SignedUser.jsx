import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-full flex items-center justify-between bg-gray-100">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </div>
);
export default SignedUser;
