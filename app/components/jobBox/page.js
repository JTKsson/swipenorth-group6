import React from 'react'
import jobBox from "./jobBox.css"

export default function JobBox() {

  return (
    <>
    <div className="jobContainer">
        <p><span className='jobTitle'>Job title</span></p>
        <p><span className='employer'>Employer</span></p>
        <p><span className='scope'>100%</span></p>
        <p><span className='jobDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s &nbsp;<span className='employerLink'>Sök jobbet</span></span></p>
        <h4 className='applyBy'>sista ansökningsdatum &nbsp; &nbsp;<span className='date'>2023-05-27</span></h4>
        <div className='btnContainer'>
        <button>nej tack</button>
        <button>spara jobb</button>
        </div>

    </div>
        </>
  )
}
