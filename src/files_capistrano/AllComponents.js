import React from 'react'

import Sidebar from './Sidebarprof';
import Classpanel from './Classpanel';
import Studentlisttable from './Studentlisttable';
import Profilegroup from './Profilegroup';
import Activitiesperweek from './Activitiesperweek';



function AllComponents() {
  return (
    <div>AllComponents
        <div className='centertemp'>
             <Classpanel></Classpanel>
        </div>
        <div className='centertemp'>
            <Sidebar></Sidebar>
        </div>
        <div className='centertemp'>
        <Studentlisttable></Studentlisttable>
        </div>
        <div className='centertemp'>    
      <Profilegroup></Profilegroup>
        </div>

      
      <div className="centertemp">
      <Activitiesperweek></Activitiesperweek>
      </div>
        
    
      
    


    </div>
  )
}

export default AllComponents