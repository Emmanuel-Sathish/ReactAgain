import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Profile</li>
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