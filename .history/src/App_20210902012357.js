import React, { useEffect } from 'react'
import GetFetchData from './API/GetFetchData';

function App() {
  let workingIntervals =[]
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
  // функция для перевода строчных значений в числовые
  function stringToArray(time) {
    let StringToArray = [
      Number(time.slice(0, time.indexOf(':'))),
      Number(time.slice(time.indexOf(':') + 1, time.length))
    ]
    return StringToArray;
  }
  const calck = () => {
    let workingIntervals = [data.start]
    let appointments = []
    let startWork = stringToArray(data.start)
    let endWork = stringToArray(data.end)
    for (let i = 0; i < data.appointments.length; i++) {
      appointments.push(stringToArray(data.appointments[i].start)) 
    }
    let numberOfAppointment = 0
     // начинаем перебирать значения времени с шагом 45 минут
    for (let i = startWork[1]; startWork[0] < endWork[0]; i = i + 45) {
      // проверка наличия совещания
      let diference = Math.abs(Math.abs(startWork[0]-appointments[numberOfAppointment][0])* 60 + (appointments[numberOfAppointment][1] - startWork[1]))
      if (diference<= 90) {
        startWork[0]=appointments[numberOfAppointment][0]
        i=appointments[numberOfAppointment][1]
        i=i+data.appointments[numberOfAppointment].duration
        console.log('совещание '+ appointments[numberOfAppointment])
        if (numberOfAppointment<(data.appointments.length-1)) {numberOfAppointment=numberOfAppointment+1}
      }
      // перебор масива
      if (i >= 60) {
        i = i - 60
        startWork[0] = startWork[0] + 1
        startWork[1] = i
      } else {
        startWork[1] = i
      }
      if (startWork[0] >= endWork[0] || (((endWork[0] - startWork[0]) === 1 )&& ((60-i)<45))) {
        return workingIntervals;
      }
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
      <h1>{workingIntervals}</h1>
      <button type="button" onClick={calck}>GET</button>
    </div>
  );
}

export default App;
