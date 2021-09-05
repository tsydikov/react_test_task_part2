import React from 'react'
import GetFetchData from './API/GetFetchData';

function App() {
  async function getFetchData() {
    const data = await GetFetchData.get()
    // console.log(data)
}
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
      <h1>WORK</h1>
      <button type="button" onClick={getFetchData}>GET</button>
    </div>
  );
}

export default App;
