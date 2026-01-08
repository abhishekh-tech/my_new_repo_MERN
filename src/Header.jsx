import React from "react";
function Header(){
  return(
       <div style={{
          position: "fixed",
          top: 0,
          left: 305,
          width: "67%",
          height: "10vh",
          backgroundColor: "lightgray", 
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",        
          borderRadius: "15px",      
          color: "white", 
          border:"3px solid purple",            
          fontWeight: "600",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
        }}>
        {/* Logo on the left */}
       <img src={img6} alt="logo"
          style={{
              height: "50px",
              width: "50px",
              borderRadius:"50%"
          }}/>

          {/* Heading text */}
        <h1 style={{
            color: "purple",
            margin: 0,
            fontSize: "24px"}}>Gupta Tech Store</h1>
          </div>
  );
}

export default Header;