import { useState } from "react";

const logo = new URL("../images/logo.jpg", import.meta.url).href;

const Header = () => {
  const[btn,setBtn]=useState(["login"]);
  
  return (
    <div className="header">   
      <div className="logoContainer">
        <img className="logo" src={logo} alt="TummyTrek Logo" />
      </div>
      <div className="navItem">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
           btn==="login"? setBtn("logout"):setBtn("login");
          }}>{btn}</button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;

