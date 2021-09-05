import React, { useEffect, useState } from 'react'
import GetFetchData from './API/GetFetchData';
import { calculateWorkingIntervals } from './function';

function App() {
  const [workingIntervals,setWorkingIntervals] = useState([])
  useEffect(()=>{
    setWorkingIntervals(calculateWorkingIntervals(data))
  },[])
  //   async function getFetchData() {
  //     const data = await GetFetchData.get()
  //     // console.log(data)
  // }
  const data = {
    "start": "10:00",
    "appointments": [
      {
        "start": "10:45",
        "duration": 45
      },
      {
        "start": "13:50",
        "duration": 20
      }
    ],
    "end": "15:00"
  }
  // функция для перевода строчных значений в числовые
  return (
    <div className="App">
      <h1>[{workingIntervals.map(interval =>
        interval+', ' )}]</h1>
    </div>
  );
}

export default App;
