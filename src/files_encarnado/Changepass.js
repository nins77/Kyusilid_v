import React from 'react'

function Changepass({changemodalhandler}) {
  return (
    <div className='modalbody'>
        <div className='modalbackground' onClick={changemodalhandler}></div>
        <div className='modalpopup' >
                <h3>Change Password</h3>
                
        </div>

    </div>

  )
}

export default Changepass