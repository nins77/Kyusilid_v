import React from 'react'
import Commentbox from '../1general/Commentbox'
import Sidebar from '../files_capistrano/Sidebarprof'


function ClassStream() {
  return (
    <div>
        <div className='streampanel col-md-12' >
          <div>
          <img src="" alt="" />
            <div> <h3>Professor posted an announcement</h3><br />
              September 3, 2022
            </div>
         
          </div>
          <div>
          Welcome to our 3rd week class. Today you will have your 1st Quiz. Contents are from the topic discussed last meetings. 
I have uploaded the ppt for you to review. 
          </div>

          <div>
            <Commentbox/>
          </div>
         
    
        </div>


        <div className='streampanel col-md-12' >
          <div>
          <img src="" alt="" />
            <div> <h3>Professor posted a New Activity</h3><br />
              September 3, 2022
            </div>
         
          </div>
          <div>
                <h3>Week 1: Introduction</h3> 
          </div>

          <div>
            <Commentbox/>
          </div>
         
    
        </div>

    </div>
  )
}

export default ClassStream