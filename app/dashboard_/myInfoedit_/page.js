"use client";
import React from "react";
import MainpageStyle from "../../../components/styles/MainpageStyle";
import Asidedashboard from "../../../components/Asidedashboard";
function Myinfo() {
  return (
    <MainpageStyle>
      <Asidedashboard />
      <div className="container">
        <h1>EDIT MY INFO</h1>
      </div>
    </MainpageStyle>
  );
}

export default Myinfo;
