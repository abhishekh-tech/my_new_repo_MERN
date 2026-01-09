import React from "react";
import img6 from './assets/laptop.png'; 
import img from './assets/newmobile.jpg'

function Header() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 305,
        width: "67%",
        height: "10vh",
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        backgroundImage:`url(${img})`,
        backgroundRepeat: "no-repeat",

        gap: "15px",
        paddingLeft: "15px",
        borderRadius: "15px",
        color: "white",
        border: "3px solid purple",
        fontWeight: "600",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Logo */}
      <img
        src={img6}
        alt="logo"
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
        }}
      />

      {/* Heading */}
      <h1
        style={{
          color: "purple",
          marginLeft:"35%",
          fontSize: "30px",
        }}
      >
        Gupta Tech Store
      </h1>
    </div>
  );
}

export default Header;
