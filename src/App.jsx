import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppWeater from './componts/appWeater'

function App() {
  const [city, setCity] = useState({})
  const fatchNameCity =  (city1) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=3f1dc12c66ba92bb56c5aca66e789824` 
  fetch(url ) 
    .then(res => res.json())
    .then(data =>  {
      setCity(data)
      
    });
    console.log(city);
  }
  

  return (
    <div>
      <AppWeater fatchNameCity = {fatchNameCity} city={city} />
      
    </div>
  )
}

export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import AppWeater from './componts/appWeater'

// function App() {
//   const [city, setCity] = useState()
//   const fatchNameCity = (city1) => {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=3f1dc12c66ba92bb56c5aca66e789824` 
//   fetch(url) 
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.main)
//       setCity(data.main)
      
//     });
//     console.log(city);
//   }
  

//   return (
//     <div>
//       <AppWeater fatchNameCity = {fatchNameCity} city={city} />
      
//     </div>
//   )
// }

// export default App
