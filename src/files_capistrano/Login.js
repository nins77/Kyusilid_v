import React from 'react'

import Sidebar from './Sidebarprof';
import Classpanel from './Classpanel';
import Studentlisttable from './Studentlisttable';
import Profilegroup from './Profilegroup';

function Login({Handlelogin, Handleuser}) {
  return (
    <div className='wholecontent'>
      <div className='loginbox'>

        <input type="text" placeholder='input type 1'/>

      <button className='button-blue' onClick={()=>{Handlelogin(true); Handleuser("prof")}}>button blue</button>
      </div>







     
    


    </div>
   
  )
}

export default Login