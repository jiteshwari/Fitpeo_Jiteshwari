import React from 'react'
import './Customers.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend); 

const Customers = () => {

    const data = {
        labels: [],
       
        datasets: [{
            label: 'poll',
            data:[3,6,5],
            // backgroundColor: ['pink', 'blue', 'lightblue'],


            // borderColor: ['pink', 'blue', 'lightblue'], 

            backgroundColor:(context) => {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if(!chartArea) {
                    return null
                }
                if(context.dataIndex === 0) {
                    return getGradient(chart);
                }else if(context.dataIndex === 1) {
                    return getGradient1(chart);
                }if(context.dataIndex === 2) {
                    return getGradient2(chart);
                }
                 else
                {
                    return 'black'
                }
            },
            borderColor:(context) => {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if(!chartArea) {
                    return null
                }
                if(context.dataIndex === 0) {
                    return getGradient(chart);
                }else if(context.dataIndex === 1) {
                    return getGradient1(chart);
                }if(context.dataIndex === 2) {
                    return getGradient2(chart);
                }
                 else
                {
                    return 'black'
                }
            },
 
            circumference:360,
            rotation: 1,
            borderWidth: [20, 12, 5]
        }]
    }

    const options = {
        cutout: 80,
      };
 
      
    const plugins = [{
        beforeDraw: function(chart) {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;
          ctx.restore();
          const fontSize = (height / 300).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "top";
      
          const text = '65%';
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2 - 10;  
          
          // Apply bold font-weight to "65%"
          ctx.font = "bold " + fontSize + "em sans-serif";
      
          // Draw "65%" text
          ctx.fillText(text, textX, textY);
      
          const text2 = ' Total New Customers';
          const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
          const textY2 = height / 2 + 10; // Adjust the vertical position
      
          // Reset to regular font-weight for the second text
          ctx.font = fontSize + "em sans-serif";
      
          // Draw "New Customers" text
          ctx.fillText(text2, textX2, textY2);
          
          ctx.save();
        }
      }];
      



function getGradient(chart) {
    const {ctx, chartArea: {top,bottom, left, right, width, height}} = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right,0);
    gradientSegment.addColorStop(0,  '#ff0066');
    gradientSegment.addColorStop(0.5, '#ff0066');
    gradientSegment.addColorStop(1,  '#ff0066');
    return gradientSegment;
}
function getGradient1(chart) {
    const {ctx, chartArea: {top,bottom, left, right, width, height}} = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right,0);
    gradientSegment.addColorStop(1, 'blue');
    gradientSegment.addColorStop(0.5, 'pink');
    gradientSegment.addColorStop(0, 'purple');
    return gradientSegment;
}
function getGradient2(chart) {
    const {ctx, chartArea: {top,bottom, left, right, width, height}} = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right,0);
    gradientSegment.addColorStop(1, '#f2f2f2');
    gradientSegment.addColorStop(0.5, '#f2f2f2');
    gradientSegment.addColorStop(0, '#f2f2f2');
    return gradientSegment;
}
   

  return (
    <div className='Cust-cart'>
        <b>Customers</b>
        <p className='text-color'>Customers that buy products</p>

       <div>
        <Doughnut  
        data= {data}
        options={options}
        plugins={plugins}
 
        >
        
        
        </Doughnut>
        
       </div>
    </div>
  )
}

export default Customers
