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
  function stringToArray(time) {
    let StringToArray = [
      Number(time.slice(0, time.indexOf(':'))),
      Number(time.slice(time.indexOf(':') + 1, time.length))
    ]
    return StringToArray;
  }
  const calck = () => {
    // for (let i = data.start; i < data.end; i = i+45) {
    //   console.log(i)  
    // }
    let workingIntervals = []
    let appointments = []
    let startWork = stringToArray(data.start)
    let endWork = stringToArray(data.end)
    for (let i = 0; i < data.appointments.length; i++) {
      appointments.push(stringToArray(data.appointments[i].start)) 
    }
    let numberOfAppointment = 0
    for (let i = startWork[1]; startWork[0] < endWork[0]; i = i + 45) {
      let diference = (startWork[0]-appointments[numberOfAppointment][0])* 60 + (appointments[numberOfAppointment][1] - startWork[1]) 
      console.log(diference, startWork)
      if (diference<= 45) {
        startWork[0]=appointments[numberOfAppointment][0]
        i=appointments[numberOfAppointment][1]
        i=i+data.appointments[numberOfAppointment].duration
        console.log(numberOfAppointment)
        if (numberOfAppointment<data.appointments.length) {numberOfAppointment=numberOfAppointment+1}
        console.log(numberOfAppointment)
      }
      console.log(startWork)
      // перебор масива
      if (i >= 60) {
        i = i - 60
        startWork[0] = startWork[0] + 1
        startWork[1] = i
      } else {
        startWork[1] = i
      }
      if (startWork[0] >= endWork[0] && startWork[1] > 0) {
        console.log(workingIntervals)
        return;
      }
      console.log(startWork)
      // наращивание масива результатов
      if (startWork[1] === 0) {
        workingIntervals.push(startWork[0] + ':' + '00')
      } else {
        workingIntervals.push(startWork[0] + ':' + startWork[1])
      }

    }
  }

  return (

    <div className="App">
      <h1>WORK</h1>
      <button type="button" onClick={calck}>GET</button>
    </div>
  );
}

export default App;
