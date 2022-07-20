import React from "react";
import "../Pages/home.css"
import {  useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate()
  const auth = useSelector((state) => state.authreducer.data.isAuth);
const handle=()=>{
if(!auth)
navigate("/login")
}
  return (
    // <div>
    //   <div data-cy="navbar-home-link">
       
    //   </div>

    //   <div>
    //     {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
    //     {!auth?  <button data-cy="navbar-login-button" onClick={handle}>LOGIN</button>:""}
    //   </div>
    // </div>
    <div>
    <div id="Navigation" class="Navigation">
      <div>
          <a href="/"><img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo"/></a>
      </div>
      <div class="disappear">
          <a href="/">Features</a>
      </div>
      <div class="disappear">
          <a href="/">Download</a>
      </div>
      <div class="Navigation__spacer">
      </div>
         <div >
       
        {!auth?  <Link to={"/login"} class="disappear" onClick={handle}>LOGIN</Link>:""}
       </div>
      <div class="disappear">
          <Link to={"/signup"}><button class="Light__btn">Sign Up</button></Link>
      </div>
      <a href="/" id="navIcon" class="Navigation__toggle" onclick="navToggler()">
          <i class="fas fa-bars"></i>
      </a>
   </div>
   </div>


  
  );
};

export default Navbar;
