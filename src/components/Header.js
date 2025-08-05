import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [loginBtn,setLoginButton] = useState("Login")
  console.log("loginBtn==>",loginBtn)

  const onlineStatus = useOnlineStatus()
  
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="w-28 m-3 p-3" >
        <img className="logo" src={LOGO_URL}></img>
      </div>
       <div className="flex items-center">
        <ul className="flex p-4 m-4" >
          <li className="px-3"> Online Status : {onlineStatus ? "🟢":"🔴"}</li>
          <li className="px-3"><Link to={"/home"}> Home</Link></li>
          <li className="px-3"><Link to={"/about"}> About Us</Link></li>
          <li className="px-3"><Link to={"/contact"}>Contact</Link></li>
          <li className="px-3"><Link>Profile</Link></li>
          <button className="px-3" onClick={()=>{
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