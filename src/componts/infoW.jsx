import React from 'react'

const InfoW = (props) => {
  console.log(props);
  return (
    <div className='container text-center mt-3'>
      {
        props.city.name == undefined ?(<h2>"Please select a city"</h2>) :
          (
            <div>
              <div className='display-4'>
                <h2>Weater of  {props.city.name}</h2>
                <h3>Condition: {props.city.weather[0].description}</h3>
                <h3>Temprature: {props.city.main.temp}</h3>
                <h3>wind: {props.city.wind.speed}km</h3>

              </div>
            </div>
          )
      }
    </div>
  )
}

export default InfoW