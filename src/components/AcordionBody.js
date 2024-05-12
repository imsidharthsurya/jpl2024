import React,{useState} from 'react'

const AcordionBody = ({data}) => {
    const {teamName,playerOne,playerTwo,owner}=data;
    const [showAcordion,setShowAcordion]=useState(false);
    const toggleAcordion=()=>{
        setShowAcordion(!showAcordion)
    }
  return (
    <div className=''>
        <div onClick={toggleAcordion} className='mt-1 mx-auto cursor-pointer lg:w-3/4 flex justify-between p-3 bg-red-400 text-white text-xl font-bold'>
            <h1>{teamName}</h1>
            <h1>{!showAcordion?"🔽":"🔼"}</h1>
        </div>
        {showAcordion && <div className='mx-auto lg:w-3/4 p-3 text-red-400'>
            <ul>
                <li className='py-2 text-center'><strong>{owner}</strong> (Owner)</li><hr/>
                <li className='py-2'>1. <strong>{playerOne}</strong> (C)</li><hr/>
                <li className='py-2'>2. <strong>{playerTwo}</strong></li><hr/>
            </ul>
        </div>}
    </div>
  )
}

export default AcordionBody