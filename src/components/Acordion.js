import React from 'react'
import AcordionBody from './AcordionBody'
import {acordionData} from "../utils/acordionData"

const Acordion = () => {
  return (
    <div className='mb-10'>
        {acordionData.map((dt,index)=>{
            return <AcordionBody key={index} data={dt}/>
        })}
        
    </div>
  )
}

export default Acordion