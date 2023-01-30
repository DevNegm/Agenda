import React from 'react'
import bgImg from "./assets/logo.png"

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#F8F7FA"}} className="px-md-5">
        <div className="container-fluid">
            <div className="py-3 text-center text-muted">
                <h6>Derechos de autor © agendacultural.es 2022 - 2023</h6>
                <p className='m-0'>Developed By <a href="https://era-coding.com/" className='fw-bold text-decoration-none text-muted'>Era Coding</a></p>
            </div>
        </div>
    </footer>
  )
}
