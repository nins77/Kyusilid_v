import React from 'react'

function Dashboardstud() {
  return (
  
    <div className="sideBar">
    My classes
    <hr />
  <ul>
  <li className="sidebarbutton">
      <Link to={'/Myclasses'}>
      <div>
            <h4 className='sidebarbuttonname'>Dashboard</h4>
      </div>
      </Link>
      
    </li>
    <li className="sidebarbutton">
      <Link to={'/Myclasses'}>
      <div>
            <h4 className='sidebarbuttonname'>All Classes</h4>
      </div>
      </Link>
      
    </li>



    <li className="sidebarbutton">
      <Link to={'/ClassBody'}>
      <div>
          <p className='sidebarbuttonname'>PET101 Advanced Petting...</p>
          <p className='sidebarbuttonname'> SBIT-4J, Saturdays 10am to 12pm</p>
      </div>
      </Link>
      
    </li>
    <li className="sidebarbutton">
      <div>
          <p className='sidebarbuttonname'>DEC102 Introduction to</p>
          <p className='sidebarbuttonname'> SBIT-4J, Saturdays 10am to 12pm</p>
      </div>
    </li>
    <li className="sidebarbutton">
      <div>
          <p className='sidebarbuttonname'>PET101 Advanced Petting...</p>
          <p className='sidebarbuttonname'> SBIT-4K, Monday 10am to 12pm</p>
      </div>
    </li>
  </ul>

  <div className="sidebarbottom">
    <div className="sidebarbutton sidebarbuttonname ">Calendar</div>
    <div className="sidebarbutton sidebarbuttonname ">Archived Classes</div>
    <div className="sidebarbutton sidebarbuttonname">Settings</div>
 
  </div>



</div>
  )
}

export default Dashboardstud