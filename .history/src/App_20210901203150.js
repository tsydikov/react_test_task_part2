import React from 'react'
import GetFetchData from './API/GetFetchData';

function App() {
  async function getFetchData() {
        const data = await GetFetchData.get()
        // console.log(data) 
 }
 
  return (
    
    <div className="App">
      <h1>WORK</h1>
      <button type="button" onClick={getFetchData}>GET</button>
    </div>
  );
}

export default App;
