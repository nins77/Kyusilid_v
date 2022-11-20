import React from 'react'
import Sidebar from '../files_capistrano/Sidebarprof'
import ClassStream from './ClassStream'
import Studentlist from './Studentlist'
import Activitystrem from './Activitystrem'
import { useState } from 'react'

import Profilenotif from '../1general/Profilenotif'


function Classbody() {
    const [toggleclass, settoggleclass]= useState(1);

    

  return (
    <div>
        <Sidebar></Sidebar>
        <Profilenotif></Profilenotif>

       

        <div className='classbody'>
            <div className="classHeader col-lg-12">
            </div>

            <div className='classbody-nav'>
                <ul>
                    <li onClick={()=>{settoggleclass(1)}}>ClassStream</li>
                    <li onClick={()=>{settoggleclass(2)}}>Activity List</li>
                    <li onClick={()=>{settoggleclass(3)}}>Students</li>
                </ul>
            </div>
            {toggleclass===1 ? <ClassStream /> : (toggleclass ===2 ? <Activitystrem/> : <Studentlist /> )}
        </div>
    </div>
  )
}

export default Classbody