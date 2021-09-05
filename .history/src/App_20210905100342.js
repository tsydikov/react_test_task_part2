import React, { useEffect, useState } from 'react'
import { calculateWorkingIntervals } from './function';

function App() {

  const [workingIntervals,setWorkingIntervals] = useState([])
  useEffect(()=>{
    setWorkingIntervals(calculateWorkingIntervals(data))
  },[])
  // используемые данные бля проверки работы приложения
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
  
  return (
    <div className="App">
      <h1>[{workingIntervals.map(interval =>
        interval+', ' )}]</h1>
    </div>
  );
}

export default App;
