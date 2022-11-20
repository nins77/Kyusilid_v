import React from 'react'

import Studentlisttable from '../files_capistrano/Studentlisttable'
import Proflisttable from '../files_capistrano/Proflisttable'
import Observerlisttable from '../files_capistrano/Observerlisttable'

function Studentlist() {
  return (
    <div>

        <div className="col-md-8 centertemp">
          <Proflisttable></Proflisttable>
          <Observerlisttable></Observerlisttable>
          <Studentlisttable></Studentlisttable>
        </div>
    </div>
  )
}

export default Studentlist