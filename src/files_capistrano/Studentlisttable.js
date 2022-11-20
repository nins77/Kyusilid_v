import React from 'react'

function Studentlisttable() {
  return (
    <div className='studentlistTable'>
      <div className='studentlistheader'>
        <h3>Student list</h3>
        <div>40 student</div>
      </div>

      
        <hr />
       
        
            <div className='col-md-8 studcontainer'>
                <div className='profilepic'> </div>
                <div> Student name
                      <p>19-0952</p>

                </div>
                      
            </div>
            <div className='col-md-8 studcontainer'>
                <div className='profilepic'> </div>
                <div> Student name
                <p>19-0952</p>
                </div>
                      
            </div>
            <div className='col-md-8 studcontainer'>
                <div className='profilepic'> </div>
                <div> Student name
                <p>19-0952</p>
                  </div>       
            </div>
    </div>
  )
}

export default Studentlisttable