import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import Calendar from '../Calendar/Calendar';

import './bargraph.css'

export default function Bargraph() {
  return (
    <div className='container flex py-10 gap-4 p-4'>
        <div className='w-[65%] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
          
            <h2 className='text-center text-lg text-textColor dark:text-white font-semibold mb-4 pt-4'>Completed Picks by Warehouse</h2>

            
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['P21', 'P23', 'P31', 'P32', 'P33'],}]}  
            series={[{ data: [2.5, 10.5, 7, 1, 2.5] }]}  
            width={800}
            height={500}
            colors={['#3f51b5', '#2196f3', '#4caf50', '#ff9800', '#f44336']}  
            />

            <div className='text-center text-lg text-textColor dark:text-white font-semibold pb-2  mt-2'>
              <span>Total Picks</span>
            </div>
            
        </div>
        <Calendar />
       
    </div>
  );
}
