import React, { useEffect, useState } from 'react'
import GetFetchData from './API/GetFetchData';
import DoctorsWorkTime from './components/DoctorsWorkTime';

function App() {
  useEffect(()=>{
    calck()
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
  
  return (
    <div className="App">
      <DoctorsWorkTime data={data} calk={calk} />
    </div>
  );
}

export default App;
