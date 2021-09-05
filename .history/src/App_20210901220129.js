import React from 'react'
import GetFetchData from './API/GetFetchData';

function App() {
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
  const calck = () => {
    for (let i = data.start; i < data.end; i = i+45) {
      const element = array[i];
      
    }
    console.log(data.start)
  }
 
  return (
    
    <div className="App">
      <h1>WORK</h1>
      <button type="button" onClick={calck}>GET</button>
    </div>
  );
}

export default App;
