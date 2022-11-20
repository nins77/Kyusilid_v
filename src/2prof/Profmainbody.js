import React from 'react';
import Activitystrem from './Activitystrem';
import Studentlist from './Studentlist';
import ClassStream from './ClassStream';
import { Link, BrowserRouter, Route, Routes} from 'react-router-dom';



function Profmainbody() {
  return (
    <div>
        <BrowserRouter>

        <Routes>
                <Route path='/ClassStream' element={<ClassStream/>} />
                <Route path='/Activitylist' element={<Activitystrem/>} />
                <Route path='/Studentlist'  element={<Studentlist/>} />
          
        </Routes>
        </BrowserRouter>



    </div>
  )
}

export default Profmainbody