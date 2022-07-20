import React, { useState } from 'react'
import "./home.css"

const Home = () => {
  const [toggle,settoggle]=useState(false)
  const handletoggle=()=>{
  if(toggle)
  {
    settoggle(false)
  }
  else
 { settoggle(true)}
  }
  console.log(toggle)
  return (
    <div id="Header" class="Header">
        <div>
            <h1>The most popular free time tracker for teams</h1>
            <div class="Header__desc"><p>Time tracking software used by millions. Clockify is a simple time tracker and timesheet app that lets you and your team track work hours across projects. Unlimited users, free forever.</p></div>
            <button class="Dark__btn">Get Started - It's Free!</button>
            <i class="fas fa-users"><span>76,318 people signed up last month</span></i>
        </div>
        <div class="Header__hero">
            <div class="Header__hero__image">
                <img class="Header__showcase" src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="icon-showcase"/>
                {!toggle&&<img id="mode" src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="hero"/>}
                {toggle &&<img id="mode" src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg" alt="hero"/>}
                <img src="https://clockify.me/assets/images/play-button.svg" alt="play button"/>
            </div>
            <label class="Header__hero__toggle">
                <input id="checker" type="checkbox" onClick={handletoggle}/> <span class="slider round"></span>
            </label>
        </div>
        <div class="Features">
        <div>
            <h1 class="Heading__Two">Time management features</h1>
            <div class="Features__desc"><p>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</p></div>
        </div>
        <div class="Features__showcase">
            <div class="Features__showcase__section">
                <div class="Features__showcase__section__content">
                    <p>Timekeeping</p>
                    <li><span>✓</span><span>Track hours using a timer</span></li>
                    <li><span>✓</span><span>Log time in a timesheet</span></li>
                    <li><span>✓</span><span>Categorize time by project</span></li>
                    <li><span>✓</span><span>Mark time as billable</span></li>
                </div>
                <div class="Features__showcase__one__image">
                    <img src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" alt="feature"/>
                </div>
            </div>
            <div class="Features__showcase__section">
                <div class="Features__showcase__section__content">
                    <p>Reporting</p>
                    <li><span>✓</span><span>Visual time breakdown</span></li>
                    <li><span>✓</span><span>Customizable reports</span></li>
                    <li><span>✓</span><span>Share reports with others</span></li>
                    <li><span>✓</span><span>Export as PDS, CSV, and Excel</span></li>
                </div>
                <div class="Features__showcase__one__image">
                    <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" alt="feature "/>
                </div>
            </div>
            <div class="Features__showcase__section">
                <div class="Features__showcase__section__content">
                    <p>Team Activity</p>
                    <li><span>✓</span><span>Invite whole team</span></li>
                    <li><span>✓</span><span>Set employee hourly rates</span></li>
                    <li><span>✓</span><span>See current activity</span></li>
                    <li><span>✓</span><span>See who worked on what</span></li>
                </div>
                <div class="Features__showcase__one__image">
                    <img src="https://clockify.me/assets/images/feature-team-scheduling.svg" alt="feature"/>
                </div>
            </div>
            <button class="Dark__btn">SEE ALL FEATURES</button>
        </div>
     </div>
     <div class="Platforms">
        <div>
            <h1 class="Heading__Two">Time tracking apps</h1>
            <div class="Platforms__desc"><p>Clockify works across devices. Track time from anywhere — all data is synced online.</p></div>
        </div>
         <div class="Platforms__apps">
            <div class="Platforms__apps__section">
                <div>
                    <img  src="https://clockify.me/assets/images/time-tracking-app-desktop.png" alt="apps"/>
                </div>
                <div>
                    <h4>Desktop App</h4>
                    <button class="Light__btn">Windows</button>
                    <button class="Light__btn">Mac</button>
                    <button class="Light__btn">Linux</button>
                </div>
            </div>
            <div class="Platforms__apps__section">
                <div>
                    <img   src="https://clockify.me/assets/images/time-tracking-app-web.png" alt="apps"/>
                </div>
                <div>
                    <h4>Web App</h4>
                    <button class="Light__btn">Android</button>
                    <button class="Light__btn">iOS</button>
                    <button class="Light__btn">Linux</button>
                </div>
            </div>
         
         </div>
     </div>
     <div class="Platforms">
      
         <div class="Platforms__apps">
            <div class="Platforms__apps__section">
                <div>
                    <img  src="https://clockify.me/assets/images/time-tracking-app-mobile.png" alt="apps"/>
                </div>
                <div>
                    <h4>Mobile App</h4>
                    <button class="Light__btn">Android</button>
                    <button class="Light__btn">Ios</button>
                 
                </div>
            </div>
            <div class="Platforms__apps__section">
                <div>
                    <img   src="https://clockify.me/assets/images/time-tracking-app-kiosk.png" alt="apps"/>
                </div>
                <div>
                    <h4>Kiosk App</h4>
                    <button class="Light__btn">Any device</button>
                    
                </div>
            </div>
         
         </div>
     </div>
     <div class="Usp">
        <div>
            <h1 class="Heading__Two">Why track time with Clockify</h1>
            <div class="Usp__cards">
                <div class="left Usp__cards__section">
                    <i class="fas fa-user-tie"></i>
                    <b>Get an accurate loot at your workweek</b>
                    <p>Track time you spend working on activites,see exactly where the time goes, and improve your productivity.</p>
                    <span>Productivity →</span>
                </div>
                <div class="right Usp__cards__section">
                    <i class="fas fa-money-bill-wave-alt"></i>
                    <b>Improve project profitability</b>
                    <p>Track time on projects so you can see how much time projects really take and see if you charge enough.</p>
                    <span>Project profitability →</span>
                </div>
                <div class="left  Usp__cards__section">
                    <i class="far fa-clock"></i>
                    <b>Show clients how much you've worked</b>
                    <p>Mark time records as billable and Clockify will apply your hourly rates,send reports to clients for review.</p>
                    <span>Client billing →</span>
                </div>
                <div class="right  Usp__cards__section">
                    <i class="fas fa-users"></i>
                    <b>See what your team works on</b>
                    <p>Employees can quickly log time so you can track attendance and see who worked on what at a glance.</p>
                    <span>Team management →</span>
                </div>
            </div>
        </div>
        <div class="clear"></div>
     </div>
    
     <div class="Free">
         <div>
            <img src="https://clockify.me/assets/images/free-forever-clock-4.svg" alt="Free "/>
         </div>
         <div>
             <h2>Free</h2>
             <span>Forever!</span>
             <li><span>✓</span><span>Unlimited users</span></li>
             <li><span>✓</span><span>Unlimited tracking</span></li>
             <li><span>✓</span><span>Unlimited projects</span></li>
             <p>Optional Upgrades →</p>
            </div>
     </div>
     <div class="Testimonials">
        <h1 class="Heading__Two">Join millions who track time with Clockify</h1>
        <img src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg" alt="rating"/>
        <span class="Testimonials__rating">4.7 customer rating</span>
        <span>1,400+ Reviews</span>
        <div class="Testimonials__cards">
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div class="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
           
        </div>
    </div>

    <div class="Footer">
        <div>
            <h1 class="Heading__Two">Start tracking time with the Clockify</h1>
            <div class="Footer__list">
                <li>Unlimited users</li>
                <li>•</li>
                <li>Cancel anytime</li>
                <li>•</li>
                <li>Free forever</li>
            </div>
            <button class="Dark__btn">Get Started - It's Free!</button>
            <i class="fas fa-users"><span>76,318 people signed up last month</span></i>
        </div>
        <div class="Footer__section">
            <div>
                <a href="/"><img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo"/></a>
                <p><a href="/">Log In</a></p>
                <p><a href="/">Sign up</a></p>
            </div>
            <div></div>
            <div>
                <b><p>Product</p></b>
                <p>Features</p>
                <p>Download</p>
                <p>Integrations</p>
                <p>Extras</p>
            </div>
            <div>
                <b><p>Solution</p></b>
                <p>Time clock</p>
                <p>Timesheet</p>
                <p>Time calculator</p>
                <p>Self-hosting</p>
            </div>
            <div>
                <b><p>Company</p></b>
                <p>About us</p>
                <p>Customers</p>
                <p>Resources</p>
                <p>Blog</p>
            </div>
            <div>
                <b><p>Support</p></b>
                <p>Help</p>
                <p>API</p>
                <p>Contact</p>
                <p><i class="fab fa-twitter"></i><i class="fab fa-youtube"></i></p>
            </div>
        </div>
        <div class="Footer__navigation">
            <div>
                <p>&copy 2020 Clockify</p>
            </div>
            <div></div>
            <div>
                <p>Cookies</p>
            </div>
            <div>
                <p>Terms</p>
            </div>
            <div>
                <p>Privacy</p>
            </div>
            <div>
                <p>Security</p>
            </div>
        </div>
     </div>

     </div>
    
  )
}

export default Home