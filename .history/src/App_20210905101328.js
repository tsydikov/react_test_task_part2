import React, { useEffect, useRef, useState } from 'react'
import { calculateWorkingIntervals } from './function';

function App() {
  // используемые данные бля проверки работы приложения
  const data = useRef({
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
  })
  const [workingIntervals,setWorkingIntervals] = useState([])
  useEffect(()=>{
    setWorkingIntervals(calculateWorkingIntervals(data.current))
  },[])
  console.log(workingIntervals.length)
  return (
    <div className="App">
      <h1>[{workingIntervals.map(interval => (interval === workingIntervals.[workingIntervals.length]) ? interval : (interval+', ')
         )}]</h1>
    </div>
  );
}

export default App;
