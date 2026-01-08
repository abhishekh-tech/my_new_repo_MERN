import React from "react";
function Navbar() {
  return (
    <div className="navbar" style={{position:"fixed",width:"67%",marginTop:"50px",height:"50px"}}>
      <span className="logo">MyApp</span>
      <span className="nav-item">Home</span>
      <span className="nav-item">About</span>
      <span className="nav-item">Contact</span>
      <div style={{position:"absolute",right:20,padding:10,paddingRight:20,paddingLeft:20,fontWeight:500,color:"blue",backgroundColor:"white",borderRadius:20}}>SignUp</div>
    </div>
  );
}

export default Navbar;