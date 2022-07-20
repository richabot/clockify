import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<ReqAuth><Main /></ReqAuth>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
