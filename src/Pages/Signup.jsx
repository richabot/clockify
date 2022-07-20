import React from 'react'
import { Link } from 'react-router-dom'
import "./Sign_Up.css"
const Signup = () => {
  return (
    <div> <div class="Sign_Up">
    <div class="Sign_Up_Contianer">
      
      
       
        <div class="Sign_Up_GetStarted">
            <p class="Sign_Up_GetStarted_Get"> Get started with Clockify</p>
            <p class="Sign_Up_GetStarted_Create"> Create a free account to start tracking time and supercharge your
                productivity</p>
            <p class="SIgn_Up_GetStarted_Credit"> No credit card required · Unsubscribe at any time</p>
        </div>
       
        <div class="Sign_Up_Form">
            <label class="Sign_Up_Form_SignUp"> Sign Up</label>
            <input type="text" name="email" id="email" placeholder="Enter email" required />
            <input type="password" name="password" id="password" placeholder="Choose password" required />
        
            <label class="Sign_Up_Terms">
                <input type="Checkbox" class="Sign_Up_Checkbox" id="Sign_Up_Checkbox" required checked/>
                I agree to the
                <span class="Sign_Up_Checkmark"></span>
                <a href="/">Terms of Use</a>
            </label>
            
            <Link to="/login"><button  class="Sign_UP_Create_Button" id="signup"> CREATE FREE ACCOUNT </button></Link>
            <h4 class="Sign_Up_error Sign_Up_error_msg" id="Sign_Up_error"> You must accept the terms of service </h4>
             <p class="Sign_Up_OR"><img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBwcHBxAQBwcHBw0HBwcHBw8ICQcNIBEWIiARFR8kHUAjIiYxHRUfITM5MTU3OjouIzQ3QDM4TjQyMjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQcGBAUD/8QALBABAAAFBQEAAgAEBwAAAAAAAAMEBVSUARUX0dMCBhEhgaGxBxITFDFhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcFQBRAFEAUQBRAFQAUQBRAFEAAAAAAAAAAAAAAAAAAAAAURQRQBBUAFQAVABUAAABQQUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRFAEAVABRAFEAFQBRAFEAAAAAAAAAAAAAAAAAAAAAAAAUEAAFQAVABUABQQFBAUEAAAAAAAAAAAAAAAAAAABRABUAFQB8T8v/J5b8Spf1Vql8xY0v8AMb4gf6clC+YsX6+tdf8AvXTT+rhueqLb1DDlvZqEeBDmYesKY+PmPC+tf3rDjQ9Inxr/AC1eXZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbNJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbNJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZpK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvY56otvUMOW9mjbLJWsvgQujZZK1l8CF0DOeeqLb1DDlvZ0X4T/AIk0/wDNJ2ZkKXDmZeYlZb/d/e4S0OH8ffx/m00/hr8/ev8AH966f8/r+7pNlkrWXwIXT95aRgSmv1rKQocrr96fr71l5f4g6/f/AL+tAehABUAAAAAAFBBQEFAQUBBQEFAQUBBQEFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAFQAVABUAAAAAAAAAAAAAAAAAAAAABQEBQQFARQBFAEUAABFAAAEFAQVAAUEBQQFBAUEFQAVABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAH/9k="
                    alt=""/>
                <span> OR </span> </p> 
            <div class="underline">
                <div></div>
                <p>OR</p>
                <div></div>

            </div>

            
            <div class="Sign_Up_Google_Button">
                <a href="/" class="Sign_Up_Google">
                    <img src="https://clockify.me/assets/ui-icons/icon-google.svg" alt="Google" />
                    <span class="Sign_Up_Google_Continue">Continue with Google </span> </a>
            </div>

        </div>
   
        <div class="Sign_Up_Privacy">
            <img src="https://clockify.me/assets/ui-icons/safe.png" alt="Privacy" class="Sign_Up_Privacy_img"/>
            <span class="Sign_Up_Privacy_Span"> your data is safe with us : </span>
            <a href="/"> Security Privacy</a>
        </div>
    </div>
</div></div>
  )
}

export default Signup