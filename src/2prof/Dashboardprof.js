import React from 'react'
import Sidebar from '../files_capistrano/Sidebarprof'
import Profilenotif from '../1general/Profilenotif'

function Dashboard() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Profilenotif/>
      <div className="classbody">
        <h1>DAshboard prof</h1>
      </div>
    </div>
  )
}

export default Dashboard