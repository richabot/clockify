import React from 'react'
import "./timetracker.css"
import "./navigation.css"
const Main = () => {
  




  return (
    <div>
       <div class="product__navigation">
        <div>
           
        </div>
        <div>
           
        </div>
        <div class="product__navigation__spacer">

        </div>
        <div>
          
            <div class="dropdown">
                <span class="dropbtn" id="workspace_password">Workspace </span>
                <div class="dropdown-content">
                    <a href="/">Workspace</a>
                    <a href="/" id="workspace_email"> </a>
                </div>
            </div>
        </div>
        <div>
           <a href="upgrade.html"><button class="btn">upgrade</button></a>
        </div>
        <div>
            <img src="https://clockify.me/assets/nav-icons/help.svg" alt="sm"/>
        </div>
        <div>
            <img src="https://clockify.me/assets/nav-icons/notification.svg" alt="EJE"/>
        </div>
        <div>
            
            <i class="fas fa-user"></i>
            <div class="dropdown">
                <span class="dropbtn">Profile </span>
                <div class="dropdown-content">
                    <a href="/" id="profile_password"> </a>
                    
                    <a href="settings.html"> Profile Setting</a>
                    <a href="desktopapp.html"> Download</a>
                    <a href="home.html"> Logout </a>
                </div>
            </div>
        </div>
   
     </div>
    <div class="product__container">
        <div id="product__container__sidebar" class="product__container__sidebar">
            <div  onclick="parent.location='timesheet.html'" title="Timesheet">
                <img src="https://clockify.me/assets/nav-icons/timesheet.svg" alt="icon"/>
                <span>Timesheet</span>
            </div>  
            <div onclick= "parent.location='timetracker.html'" title="Time Tracker">
                <img src="https://clockify.me/assets/nav-icons/time-tracker.svg" alt="icon"/>
                <span>Timetracker</span>
            </div>
            <div  id="product__analyze">
                <p>Analyze</p>
            </div>
            <div onclick= "parent.location='dashboard.html'" title="Dashboard">
                <img src="https://clockify.me/assets/nav-icons/dashboard.svg" alt="icon"/>
                <span>Dashboard</span>
            </div>
            <div id="product__manage">
                <p>Manage</p>
            </div>
            <div onclick= "parent.location='teams.html'" title="Team">
                <img src="https://clockify.me/assets/nav-icons/teams.svg" alt="icon"/>
                <span>Team</span>
            </div>
            <div onclick= "parent.location='client.html'" title="Clients">
                <img src="https://clockify.me/assets/nav-icons/clients.svg" alt="icon"/>
                <span>Clients</span>
            </div>
            <div onclick= "parent.location='tags.html'" title="Tags">
                <img src="https://clockify.me/assets/nav-icons/tags.svg" alt="icon"/>
                <span>Tags</span>
            </div>
            <div onclick= "parent.location='settings.html'" title="Settings">
                <img src="https://clockify.me/assets/nav-icons/settings.svg" alt="icon"/>
                <span>Settings</span>
            </div>
        </div>
        
 
    <div id="product__container__content" class="product__container__content">
         <div class="Timetracker">
            <div class="Timetracker__navigation">
                <h2>Timetracker</h2>
            </div>
            <div class="Timetracker__head">
                <div>
                    <input class="Timetracker__description" id="Timetracker__description" placeholder="What are you working on"/>
                </div>
                
               
                <div>
                    <h4 id="time__tracker">00:00:00</h4>
                </div>
                <div id="stopWatchToggle">
                    <button id="time__start">Start</button>
                </div>
            </div> 
            <div id="Timetracker__body" class="Timetracker__body">
               
            </div>
          </div>
        </div>
    </div>



    </div>
  )
}

export default Main