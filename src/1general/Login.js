import React, { useState } from 'react'
import {FaUserAlt , FaLock ,FaEyeSlash, FaEye} from "react-icons/fa"

function Login() {
  const [username , setusername] =useState('');
  const [passwordbox,setpassword]= useState('');
  const [passwordvisible, setpasswordvisible] = useState(false);

  const username1=val=>{
    setusername(val.target.value);
  }

  const setpassword1=val=>{
      setpassword(val.target.value);
  }


  const trylogin=()=>{

    if(username==='prof' && passwordbox==='1234'){
      window.location.href = '/Dashboard1';
    
    }
  }


  return (
    <div>
        <div className="loginheader">
          <img src='../images/Kyusilid.jpg' alt="" />
          <img src='../images/QCU.jpg' alt="" />
          <div>
            <h3>QUEZON CITY UNIVERSITY | KYUSILID</h3>
          </div>

          <div className='loginbackground'>
            <div>
                <h1>Kyusilid online classroom</h1>
                <h1>For QCU</h1>
            </div>


          </div>



          <div className='loginpanel'>
            <h3>Welcome QCians</h3>

            <div className='inputcontainerlogin'>
              <h5>Username</h5>
              <input type="text" defaultValue={username} value={username} onChange={username1}/>
              <FaUserAlt className='loginicon'/>
            </div>

            {passwordvisible ?
                <div className='inputcontainerlogin'>
                <h5>Password</h5>
                <input type="text" defaultValue={passwordbox} value={passwordbox} onChange={setpassword1}/>
        
                <FaLock className='loginicon'/>
                <FaEye className='loginicon2' onClick={()=>{setpasswordvisible(false)}}/>
                </div>
   
               :

               <div className='inputcontainerlogin'>
               <h5>Password</h5>
               <input type="password" defaultValue={passwordbox} value={passwordbox} onChange={setpassword1}/>
       
               <FaLock className='loginicon'/>
               <FaEyeSlash className='loginicon2' onClick={()=>{setpasswordvisible(true)}}/>
             </div>

           

            }


           
          <button className='loginbutton' onClick={()=>{trylogin()}}>Login</button>
              <br />
          <a href="">forgot password</a>
          </div>



    

    

        </div>


    </div>
    
  )
}

export default Login