import React, { useState } from 'react'
import Sidebar from '../files_capistrano/Sidebarprof';
import Commentbox from '../1general/Commentbox';
import { Link } from 'react-router-dom';

function Activitystrem() {
  const [ menutoggle ,setmenu]=useState(false);
  return (
    <div>
          <div className='menubody'>

          <div className='createactionbutton'>
              <button onClick={()=>{setmenu(!menutoggle)}}>Create</button>
          </div>

          {menutoggle &&     <div className='createmenulist'>
                <ul>
                  <li><Link to={'/Createactivity'}>Activity</Link></li>
                  <li>Assigment</li>
                  <li>Quiz</li>
                  <li>Seatwork</li>
                  <li>Material</li>
                </ul>
          </div>}
          </div>


        <div>
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
    </div>
  
  )
}

export default Activitystrem