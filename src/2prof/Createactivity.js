import React from 'react'
import Sidebar from '../files_capistrano/Sidebarprof'
import Profilenotif from '../1general/Profilenotif'
import activityform from '../files_encarnado/activityform.png'
import activityfiles from '../files_encarnado/activityfiles.png'

function Createactivity() {
  return (
    <div className='classbody'>
        <Sidebar></Sidebar>
        <Profilenotif></Profilenotif>

        <h1>Creating an activity</h1>

        <div className=' activitybody'>
        <img src={activityform} alt="" />
        <img src={activityfiles} alt="" />

        </div>
 




        
    </div>
  )
}

export default Createactivity