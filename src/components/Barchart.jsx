import React from 'react'
import { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Barchart() {
 

const data = [
  {
    name: 'Page A',
    boys: 4000,
    girls: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    boys: 3000,
    girls: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    boys: 2000,
    girls: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
     boys: 2780,
    girls: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    boys: 1890,
    girls: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    boys: 2390,
    girls: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    boys: 3490,
    girls: 4300,
    amt: 2100,
  },
];
 
    return (
    <div style={{
      boxShadow:"0 0 20px white"
    }} className='bg-slate-800 font-bold rounded-md ms-3 shadow-md p-4 min-w-[400px] h-full'>
        <div>
            <h1 className='text-2xl font-semibold text-white mb-3 text-center underline'>Attendance</h1>
        </div>

<div>
       <ResponsiveContainer minHeight="370px" minWidth="600px">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill:"white"}} stroke='white' />
          <YAxis tick={{fill:"white"}} stroke="white" />
          <Tooltip />
          <Legend />
          <Bar dataKey="boys" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="girls" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}


export default Barchart
