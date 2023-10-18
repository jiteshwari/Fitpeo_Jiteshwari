import React from 'react'

import './ProgressReport.css';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
  } from "recharts";

const ProgressReport = () => {
     //   for (const expense of props.expenses) {
  //     const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
  //     chartDataPoints[expenseMonth].value += expense.amount;
  //   }

    const data = [
        {
          name: "Jan",
          pv: 2400,
        
        },
        {
            name: "Feb",            
            pv: 2400,
          
          },
        {
          name: "Mar",
       
          pv: 1398,
          
        },
        {
            name: "April",
         
            pv: 1398,
            
          },{
            name: "May",
         
            pv: 1398,
            
          },{
            name: "June",
         
            pv: 1398,
            
          },{
            name: "July",         
            pv: 1398,            
          },
          {
            name: "Aug",         
            pv: 2400,            
          },
          {
            name: "Sept",         
            pv: 1398,            
          },
          {
            name: "Oct",         
            pv: 1398,            
          },
          {
            name: "Nov",         
            pv: 1398,            
          },
          {
            name: "Dec",         
            pv: 1398,            
          },

    ]
    
return (
      
    <div className='charts'>
    <ResponsiveContainer width="120%" height="100%">
    <BarChart
    width={600}
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
      
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
         </BarChart>
    </ResponsiveContainer>
    </div>
)
}
export default ProgressReport;
