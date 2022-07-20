import React from "react";
import { getLoginAPI } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./log-in.css"
const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();

  const email = "eve.holt@reqres.in";
  const password = "cityslicka";

  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    const comingFrom = state?.from?.pathname || "/main";
console.log(comingFrom,"coming")
    dispatch(getLoginAPI({ email: email, password: password })).then((r) => {
      if (r.type === "LOGIN_SUCCESS") {
        navigate(comingFrom, { replace: true });
      }
    });
  };

  return (
    // <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
    //   <h2>LOGIN</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>User Email</label>
    //       <br />
    //       <input data-cy="login-email" defaultValue={email} />
    //     </div>
    //     <div>
    //       <label>User Password</label>
    //       <br />
    //       <input data-cy="login-password" defaultValue={password} />
    //     </div>
    //     <button type="submit" data-cy="login-submit">
    //       Loading
    //     </button>
    //   </form>
    // </div>
    
     <div>
        <div class="container">  
<div class="container__leftPart">   

   
    <div class="container__navbar">
       
        <div><p className="dont">Don't have an account? <a href="/singup">Sign Up</a></p></div>    
    </div>


    <form onSubmit={handleSubmit}>
    <div class="container__loginCard">
        <h3>Log In</h3>
        <input type="email" placeholder="Enter email" defaultValue={email}  id="email1"/>
        <input type="password" placeholder="Enter password" defaultValue={password} id="pswd" />
        <div class="loginCard__checkbox">
            <input type="checkbox"/>
            <label>Stay logged in</label>
        </div>
        <a href="/">Forgot password?</a><br/>
        <div class="loginBtn-link" ><a href="/main"><button class="loginCard__loginBtn" id="login-btn"  type="submit">Log in</button></a></div> 
        <div class="loginCard__line">
            <div class="loginCard__leftLine"></div>
            <p className="ptag1">OR</p>
            <div class="loginCard__rightLine"></div>
        </div>
        <button class="loginCard__googleBtn"><img src="https://clockify.me/assets/ui-icons/icon-google.svg" alt="bej"/> <span>Continue with Google</span></button>
         
    </div>
    </form>
   

</div>


<div class="container__rightPart">
    <h2>Scheduling</h2>
    <p className="pti">Visualize projects on a timeline and plan team's capacity (see who's busy and who's available).</p>
    {/* <img src="" class="rightPart__appstore"/><br/>    */}
    <img src="https://app.clockify.me/assets/images/scheduling-promo.svg" alt="ji" class="rightPart__pic"/><br/>
   
</div>

</div>

</div>
    
  );
};

export default Login;
