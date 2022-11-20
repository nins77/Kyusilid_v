import React from 'react'
import Sidebar from '../files_capistrano/Sidebarprof';
import Classpanel from '../files_capistrano/Classpanel';
import Profilenotif from '../1general/Profilenotif';

function MyClasses() {
  return (
    <div>
        
        <Sidebar></Sidebar>
        <Profilenotif></Profilenotif>

        <div className='classbody'>

          <div className="row transist">
                <div className='col-sm-3 panelcontainer1'><Classpanel/></div>
                <div className='col-sm-3 panelcontainer1'><Classpanel/></div>
                <div className='col-sm-3 panelcontainer1'><Classpanel/></div>
          </div>
           
          
       </div>


    </div>
  )
}

export default MyClasses