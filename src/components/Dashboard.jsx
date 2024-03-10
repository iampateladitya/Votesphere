import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

function Home() {

  const data = [
    {
      name: 'A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>BJP</h3>


            <img src="data:image/png;base64,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" alt="" className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CONGRESS</h3>


            <img src="data:image/png;base64,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" alt="" className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CPI</h3>

            <img src="data:image/png;base64,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" alt="" className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>AAP</h3>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQN6TWjcIP9PMHxjrgLNA5Md0G3Qz_z_-fGA&usqp=CAU" alt="" className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Home
