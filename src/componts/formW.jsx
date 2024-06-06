import React from 'react'
import {useRef} from "react"

const FormW = (props) => {
    const inupt_city = useRef()
    const input_btn = () => {
        props.fatchNameCity(inupt_city.current.value)
    }

  return (
    <nav className='container-fluid  bg-warning p-4'>
        <div className='container '>
            <div className="row ">
                <div className='logo col-auto '>
                    <h2>weather</h2>
                </div>
                <div className='d-flex col-md-4'>
                    <input ref={inupt_city} id='id_input' placeholder='search' />
                    <button onClick={input_btn} id="search_btn" className='btn btn-dark'>search</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default FormW