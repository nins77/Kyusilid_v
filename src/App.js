
import { useState } from 'react';
import AllComponents from './files_capistrano/AllComponents';
import { Link, BrowserRouter, Route, Routes} from 'react-router-dom';

import Profmainbody from './2prof/Profmainbody';
import ClassStream from './2prof/ClassStream';
import MyClasses from './2prof/MyClasses';
import Classbody from './2prof/Classbody';
import Activityview from './2prof/Activityview';
import Quizview from './2prof/Quizview';
import Login from './1general/Login';
import Dashboardprof from './2prof/Dashboardprof';
import Profileprof from './2prof/Profileprof';
import Createactivity from './2prof/Createactivity';


function App() {

  const [isloggedin, setlogin]= useState(false);
  const [username, setusername]= useState("Mario");
  const [usertype, setusertype]= useState();


  
  return (
    <div className="App">

       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login></Login>} />
              <Route path='/MyClasses' element={<MyClasses/>}></Route>
              <Route path='/ClassBody' element={<Classbody/>}/> 
              <Route path='/Activity' element={<Activityview/>}> </Route>
              <Route  path='/Quiz' element={<Quizview/>}/>
              <Route path='/Dashboard1' element={<Dashboardprof/>} /> 
              <Route path='/Profile1' element={<Profileprof/>}></Route>
              <Route path='/Createactivity' element={<Createactivity/>}></Route>



          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
