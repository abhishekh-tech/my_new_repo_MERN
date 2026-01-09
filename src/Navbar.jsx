import React from "react";

import { useState } from "react";

function ButtonText() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        fontWeight: 500,
        color: "blue",
        backgroundColor: "white",
        borderRadius: 20,
        cursor: "pointer"
      }}
      onClick={() => setClicked(!clicked)}
    >
      {clicked ? "Get Started" : "SignUp"}
    </div>
  );
}


function Navbar() {
  return (
    <div className="navbar" style={{position:"fixed",width:"67%",marginTop:"50px",height:"50px"}}>
      <span className="logo">MyApp</span>
      <span className="nav-item">Home </span>
      <span className="nav-item">About Us </span>
      <span className="nav-item">Shop </span>
      <span className="nav-item">Products </span>
      <span className="nav-item">Pages </span>
      <ButtonText/>
      </div>
  );
}

export default Navbar;