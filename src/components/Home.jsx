import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Home() {
  return (<>
    
   <div className='w-full max-h-[81vh] '>
    <div className=' flex justify-evenly gap-1 mt-2  '>
      <div className=' card bg-slate-800  w-72 h-[410px] mx-3'>
              <div className=' card-title'>
                <img className='w-96' src="https://thumbs.dreamstime.com/b/student-welfare-logo-vector-illustration-art-design-334447298.jpg" alt="" srcset="" />
                 
                   
              </div>
              <div className=' card-body text-center'>
                   <h1 className='text-white font-bold text-center'>Student Login Portal</h1>
                   <Link to="/studentlogin"><button  className=' btn btn-square text-white w-28 bg-slate-700 border-1 border-white'>Student Login</button></Link>

              </div>
      </div>


      <div className=' card bg-slate-800  w-72 h-[410px] mx-3'>
              <div className=' card-title'>
                <img className='w-96' src="https://t3.ftcdn.net/jpg/01/87/20/32/360_F_187203256_Li8bjvTWRGjEPM50xhHAPGU40fBUrK92.jpg" alt="" srcset="" />
                 
                   
              </div>
              <div className=' card-body text-center'>
                   <h1 className='text-white font-bold text-center'>Teacher Login Portal</h1>
                   <Link to="/teacherlogin"><button  className=' btn btn-square text-white w-28 bg-slate-700 border-1 border-white'>Teacher Login</button></Link>

              </div>
      </div>


      <div className=' card bg-slate-800  w-72 h-[410px] mx-3'>
              <div className=' card-title'>
                <img className=' w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV72jN_mCWtvAqBcmTtmXbVu00GVbAyLFYA&s" alt="" srcset="" />
                 
                   
              </div>
              <div className=' card-body text-center'>
                   <h1 className='text-white font-bold text-center'>Admin Login Portal</h1>
                  <Link to="/adminlogin"><button  className=' btn btn-square text-white w-28 bg-slate-700 border-1 border-white'>Admin Login</button></Link>
              </div>
      </div>

    </div>
    
   </div>
   </>
  )
}

export default Home
