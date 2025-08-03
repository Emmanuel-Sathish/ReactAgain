import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {

  const [loginBtn,setLoginButton] = useState("Login")
  console.log("loginBtn==>",loginBtn)
  
  return (
    <div className="header">
      <div >
        <img className="logo" src={LOGO_URL}></img>
      </div>
       <div className="nav-items">
        <ul >
          <li><Link to={"/home"}> Home</Link></li>
          <li><Link to={"/about"}> About Us</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link>Profile</Link></li>
          <button className="login-btn" onClick={()=>{
            loginBtn == "Login" ? setLoginButton("Logout") : setLoginButton("Login")
          }}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;