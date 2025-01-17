
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Financechart() {
   
    const data = [
        {
          name: 'Page A',
          Paid: 4000,
          unpaid: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
         Paid: 3000,
          unpaid: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          Paid: 2000,
          unpaid: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          Paid: 2780,
          unpaid: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          Paid: 1890,
          unpaid: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          Paid: 2390,
          unpaid: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          Paid: 3490,
          unpaid: 4300,
          amt: 2100,
        },
      ];


  return (
    <div style={{
      boxShadow:"0 0 20px white"
    }} className='bg-slate-800 rounded-md ms-3 shadow-md p-4 min-w-[400px] h-full '>
    <div>
        <h1 className='text-2xl font-semibold text-white mb-2 text-center underline'>Finance</h1>
    </div>

    <ResponsiveContainer  className="bg-gray-700 font-bold text-white" minHeight="400px" minWidth="1000px">
    <LineChart className='text-white'
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
      <CartesianGrid strokeDasharray="3 3" stroke='#ccc'/>
      <XAxis dataKey="name" tick={{ fill: 'white' }}  stroke="white"  />

      <YAxis tick={{ fill: 'white' }}  stroke="white"/>

      <Tooltip contentStyle={{ backgroundColor: 'black', color: 'black' }}  itemStyle={{ color: '#fff' }}    labelStyle={{ color: '#fff' }} />
      <Legend  wrapperStyle={{ color: 'black' }} />
      <Line type="monotone" dataKey="Paid" stroke="#8884d8" activeDot={{ r: 8 }}  strokeWidth={3}  />
      <Line type="monotone" dataKey="unpaid" stroke="#82ca9d"  strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>

    </div>
  )
}

export default Financechart
