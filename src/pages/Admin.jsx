import React from 'react'
import Headcounts from '../components/Headcouts'
import CountRadialCharts from '../components/CountRadialCharts'
import { BarChart } from 'recharts'
import Barchart from '../components/Barchart'
import Financechart from '../components/Financechart'
import EventCalender from '../components/EventCalender'

function Admin() {
  return (
    <div className="flex  items-start justify-between min-h-screen">
      <div className="flex flex-col items-center justify-center w-2/3 h-full">
        <div className="flex justify-evenly items-center mt-10 w-full">
          <Headcounts type="Students" counts="200" />
          <Headcounts type="Teacher" counts="20" />
          <Headcounts type="Subjects" counts="10" />
          <Headcounts type="Staffs" counts="50" />
         
        </div>
       

        {/* ----- Graphs --------- */}
        <div
          style={{
            display: "flex",
            alignContent: "flex-start",
          }}
          className="flex flex-col w-full items-start mt-10"
        >
          <div className="flex justify-start w-full items-start gap-4">
            <CountRadialCharts />
            <div className="flex-1 h-full">
              <Barchart />
            </div>

            
        
          </div>

          {/* Finance Chart Section */}
          <div className="mt-1  p-2 rounded-md  mb-16  ">
            <Financechart />
          </div>


          
        </div>
      </div>
      <div   className="mt-3 p-4 me-5 ms-2 rounded-lg  shadow-md bg-gray-800 "
        style={{
    
          borderRadius: "12px", // rounded corners
          boxShadow: "0 0 20px white", // box shadow
        }}>
        <EventCalender />
        </div>
    </div>
  );
}

export default Admin;
