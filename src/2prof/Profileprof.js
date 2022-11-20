import React, { useState } from 'react'
import Sidebar from '../files_capistrano/Sidebarprof'
import Profilenotif from '../1general/Profilenotif'
import Changepass from '../files_encarnado/Changepass'

function Profileprof() {
    const [changepassmodal, setmodal] = useState(false);
    
    const setmodal2 = ()=>{
        setmodal(!changepassmodal);
      
    }




  return (
    <div className='classbody'>
        <Sidebar></Sidebar>
        <Profilenotif/>

        <div className='profilebox'>
                <div className="profileheader">

                </div>
                <div className='profileheaderimg'>

                </div>
                <h3>Jacob Santos</h3>
                <div className='profilebody'>

                    <table>
                        <tr>

                            <td>username</td>
                            <td>Jacob1123</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>jacob1123@gmail.com</td>

                        </tr>
                        <tr>
                            <td>department</td>
                            <td>Information technology</td>
                        </tr>
                       
                    </table>

                    <div>
                        <button onClick={setmodal2}>Change password</button>
                        <button>Change Profile pic</button>
                    </div>

                 
                </div>

        </div>

            {changepassmodal && <div>
               <div className='modalbody'>
                    <div className='modalbackground' onClick={setmodal2}></div>
                    <div className='modalpopup'>
                        <h4>Change password</h4>
                        <input type="password" placeholder='Input new password'/>
                        <br />
                        <input type="password" placeholder='Confirm new password' />
                        <br />

                        <button onClick={setmodal2}>Done</button>
                    </div>
               </div>

                
            </div> }

    </div>
  )
}

export default Profileprof