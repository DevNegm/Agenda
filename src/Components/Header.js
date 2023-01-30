import React from 'react'
import bgImg from "./assets/bg.jpg"
export default function Header() {
  return (
    <header className='container-fluid py-5 px-0'>
       <div className="container-fluid">
       <div className="row  align-items-center" style={{minHeight:"70vh", height:"100%"}}>
            <div className="col-md-5 mb-5 text-md-start text-center">
                <h2 className='display-1 fw-bold mb-4'>Your Next Event Is Here</h2>
                <a href="#" className='primary-btn'>Explore Now!</a>
            </div>
            <div className="col-md-7">
                <img src={bgImg} alt="header" className='w-100 header-img' style={{height:"300px"}} />
            </div>
        </div>
       </div>
    </header>
  )
}
