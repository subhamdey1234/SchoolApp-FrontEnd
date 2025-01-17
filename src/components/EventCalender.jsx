import React, { useState } from 'react'
import { use } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { CiMenuKebab } from 'react-icons/ci';
function EventCalender() {
    const [value,onchange]=useState(new Date());
  return (
    <div className='bg-gray-800 flex flex-col w-full h-full p-4 rounded-md shadow-md overflow-auto max-h-[128vh]'>
<Calendar className="text-black w-full"  onChange={onchange} value={value}/>      
<div className='flex flex-col gap-4 w-full p-4'>
    <div className="flex justify-between items-center">
    <h1 className='text-2xl font-semibold text-center text-white underline'>Events</h1>
    <CiMenuKebab className='rotate-90 text-4xl text-white cursor-pointer'/>

    </div>
    {/* Event Lists */}
    <div>
         {/* 1 */}
         <div className='border-2 min-h-28 border-t-4 border-t-blue-500 flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white ms-3 underline'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white ms-3 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>

         </div>

     {/* 2 */}


<div className='border-2 min-h-28 border-t-4 border-t-blue-500 mt-2 flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='ms-3 underline font-bold text-white'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>

         </div>

   {/* 3 */}
         <div className='border-2 mt-2 min-h-28 border-t-4 border-t-blue-500 flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white ms-3 underline'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white ms-3 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>

         </div>

{/* 4 */}

         <div className='border-2 min-h-28 mt-2 border-t-4 border-t-blue-500 flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white ms-3 underline'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptatum! Sequi ea ipsum eum inventore, esse iusto unde magni.</p>
              </div>

         </div>    

    </div>
   
    <div className="flex justify-between items-center">
    <h1 className='text-2xl font-semibold text-center text-white underline'>Announcements</h1>
    <CiMenuKebab className='rotate-90 text-4xl text-white cursor-pointer'/>

    </div>
    </div>


    <div className='flex flex-col gap-4 w-full p-2  '>
    <div className="flex justify-between items-center w-full bg-slate-500 ">
    <div className='border-2 min-h-20 rounded-lg border-t-4 border-slate-500 flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white ms-3 underline '> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

         </div> 



    </div></div>



    {/* 2 */}


    <div className='flex flex-col gap-4 w-full p-2  '>
    <div className="flex justify-between items-center w-full bg-green-700  ">
    <div className='border-2 min-h-20 border-t-4 border-green-700 rounded-lg  flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white underline ms-3'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

         </div> 



    </div></div>
{/* 3 */}

    <div className='flex flex-col gap-4 w-full p-2  '>
    <div className="flex justify-between items-center w-full bg-blue-700 ">
    <div className='border-2 min-h-20 rounded-lg border-t-4 border-blue-700  flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white underline ms-3'> Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi 
                </p>
              </div>

         </div> 



    </div></div>



    {/* 4 */}

    <div className='flex flex-col gap-4 w-full p-2  '>
    <div className="flex justify-between items-center w-full bg-stone-500 ">
    <div className='border-2 min-h-20 rounded-lg border-t-4 border-stone-500  flex flex-col items-center gap-2 justify-center'>
              
              <div className='flex w-full justify-between'>
     <h1 className='font-bold text-white underline ms-3' > Sample Heading</h1>
     <p className=' text-xs text-white me-3 font-extrabold'>12:00 PM - 2:00 PM</p>

              </div>
              <div>
                <p className='text-white font-semibold ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

         </div> 



    </div></div>

</div>
  
  )
}

export default EventCalender
