import React, { useState } from 'react'
import { FaUser , FaBell} from 'react-icons/fa'

function Profilenotif() {

    const [shownotif, setnotif] = useState(false);
    const goprofile = ()=>{
        window.location.href = '/Profile1';
    }

    const togglenotif=()=>{
        setnotif(!shownotif);

    }

    
  return (
    <div className='profilenotif'>
            <div>
                    <div>2</div>
                    <FaBell className='notif11'/>
            </div>
            <div onClick={togglenotif}>
                    <FaUser className='profilebutton' />
            </div>

            {shownotif && 
            <div className='profilebuttonmenu'>
            <div>
                <h3>Username</h3>
                
            </div>


            <ul>
                <li><button onClick={togglenotif}>Profile</button></li>
                <li>Logout</li>
            </ul>

    </div>
}

            
    </div>
  )
}

export default Profilenotif