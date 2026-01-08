import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './assets/fb.png'
import img2 from './assets/insta.jpg'
import img3 from './assets/download.png'
import img4 from './assets/everest.jpg'
import img5 from './assets/techo.jpg'
import img6 from './assets/laptop.png'
import img7 from './assets/technology.jpg'
import Navbar from './Navbar.jsx'



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



function Form(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phoneNo,setPhoneNo]=useState('');

    const handleNameChange = (event) => {
    setName(event.target.value);
  };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

    const handlePhoneChange = (event) => {
    setPhoneNo(event.target.value);
  };

    
  return( 
    <form className="footer-form" style={{position:"absolute",left:"40%",bottom:"50%"}}>
      <p style={{color:"white",left:20,fontWeight:500,fontSize:15}}>Add Your Information:</p>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your Name:"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <input
        type="text"
        value={phoneNo}
        onChange={handlePhoneChange}
        placeholder="Enter your Phone Number:"
      />
    </form>
  );
}

function Dashboard_Section(){
  const stats=[
    {
      headline:"Basic Plan",
      description:"To provide diversified tech products to the customers in the given time without no delays",
      number:"200+ different products"
    },
    {
      headline:"Weekly Sales",
      description:"Destined to provide customer satisfaction which can ultimately increase the Weekly Sales",
      number:"1200+"
    },
    {
      headline:"Total Active Visitors",
      description:"Motivated to increase the number of active visitors by providing quality products and better delivery services",
      number:"8000+"
    }
  ]
  return(
  <div>
    <section id="team" className="about-team section">
      <marquee className="dashboard-title" style={{zIndex:1}}>!!! 20% off on Lenovo Ideapad and HP Victus !!!</marquee>
      <div className="dashboard-wrapper">
        
      <div className="left-section" style={{border:"8px solid #1E90FF"}}>
        <h1 style={{color:"white"}}>Top Tech Unbeatable Prices</h1>
        <h1 style={{color:"white"}}>Best Offers!</h1>
        <p>This section is on the left.</p>
      </div>
      <div className="dashboard-container">
        
        <div className="dashboard-grid">
          {stats.map((member,index)=>(
            <div key={index} className="team-card">
            <h3 className="team-name">{member.headline}</h3>
            <p className="team-role">{member.description}</p>
            <p className="dashboard-number">{member.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </section>
  </div>
  );
}

function AboutTeamSection(){
  const teamMembers=[
    {
      name:"Abhishekh Gupta",
      role:"CEO and Founder",
      description:"Visionary leader in tech and finance field with 10+ years of experience."
    },
    {
      name:"Shibesh Dhungana",
      role:"Co-Founder",
      description:"Honest and Dedicated with work and good work ethics and best motivater."
    },
    {
      name:"Bijay Shah",
      role:"Tech Manager",
      description:"Highly intelligent and genius in coding with 10+ years of experience of teaching."
    },
    {
      name:"Aashish Mahato",
      role:"Finance Manager",
      description:"Smooth and Efficient finance management capabilities with Share Market understanding."
    },
  ];
  return(
     <section id="team" className="about-team section">
      <div className="section-container">
        <h2 className="section-title">Our team</h2>
        <p className="section-subtitle">
          Meet the talented individuals who make our vision a reality:-
        </p>
        <div className="team-grid">
          {teamMembers.map((member,index)=>(
            <div key={index} className="team-card">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
     </section> 
  );
}
function Footer(){
  return(
     <div style={{
          display:"flex",
          flexDirection:"column",
          backgroundColor:"#000080",
          alignItems:"center",//vertical position:center,space-between space-evenly
          justifyContent:"space-evenly",
          position:"relative",//horizontal position:center,space-between space-evenly
          height:300,}}>
             <div style={{
                  width:"100px",
                  height:"100px",
                  borderRadius: "100%",
                  backgroundColor: "#A7C7B7", // silvery green
                  position: "absolute",
                  top:"20px",
                  left:"50px",
                  zIndex:1
                }}><img src={img5} alt="img4" style={{ width: "120px", height: "120px",borderRadius:"100%" }}/></div>

               <div style={{
                  position: "absolute",
                  top:"20px",
                  right:"100px",
                  zIndex:1
                }}><p style={{color:"white",margin:0}}>Contact Us:</p>
                <p style={{color:"white",margin:0}}>Phone no: 9817756908</p>
                <p style={{color:"white",margin:0}}>Gmail ID: gabhishekh1@gmail.com</p>
                </div>
                <div style={{
                  position: "absolute",
                  bottom: "120px",
                  right: "120px",
                  display: "flex",
                  gap: "10px"
                  }}>
                <img src={img1} alt="img1" style={{ width: "60px", height: "60px",borderRadius:"20%" }}/>
                <img src={img2} alt="img2" style={{ width: "60px", height: "60px",borderRadius:"20%" }}/>
                <img src={img3} alt="img3" style={{ width: "60px", height: "60px",borderRadius:"20%" }}/>
            </div>
            <Form/>
          </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{border:"1px solid black"}}>      
        <Header/>
        <Navbar/>
        <Dashboard_Section/>        
        <AboutTeamSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
