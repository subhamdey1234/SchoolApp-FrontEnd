import React from 'react'
import EventCalender from '../components/EventCalender'
import { CiMenuKebab } from 'react-icons/ci'
import Bigcalender from '../components/Bigcalender'


function Student() {
  return (
    <div className='bg-slate-500 min-h-[100vh] w-full flex gap-5  '>
      {/* Schedule  Calender*/}
      <div style={{boxShadow:"0 0 10px white"}} className='bg-slate-800 mt-1 ms-2 lg:w-2/3 rounded-md overflow-auto max-h-[91vh]' >
              
              {/* Title */}
              <div className='flex justify-between w-full px-8 mb-4 mt-3'>
                <h1 className='text-2xl text-white underline font-bold'>Schedule Classes</h1>
                <CiMenuKebab className='rotate-90 text-4xl text-white cursor-pointer'/>
              </div>
    {/* Claendar */}
             <div className='w-full'>
                    <Bigcalender/>           
              </div> 

        </div>
{/* Events calender */}
<div style={{boxShadow:"0 0 20px white"}} className=' lg:w-1/3 mt-1 p-3 me-1  rounded-lg shadow-md bg-gray-800  overflow-auto max-h-[91vh]'>
<EventCalender/>
</div>
      
    </div>
  )
}

export default Student
