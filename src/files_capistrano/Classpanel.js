import React from 'react'
import {BsThreeDots} from 'react-icons/bs';

function Classpanel() {
  return (

    <div className='classPanel'>
    <div className='classPanel-header'>
      <h3>Classname</h3>

    </div>
    <ul>
      <li>
        Prof name
      </li>
      <li>Subject code</li>
      <li>Schedule</li>
    </ul>
    <div>
    <BsThreeDots/>
    </div>

  </div>

  )
}

export default Classpanel