import React from 'react'
import FormW from './formW'
import InfoW from './infoW'

const AppWeater = (props) => {
  return (
    <div>
        <FormW fatchNameCity = {props.fatchNameCity}/>
        <InfoW city={props.city}/>
    </div>
  )
}

export default AppWeater