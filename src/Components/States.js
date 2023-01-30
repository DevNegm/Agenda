import React from 'react'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function States({state,filterState,filterProvince}) {
    const [open,setOpen] = useState(false)
    const openHandler = () => {
        setOpen(!open)
    }
  return (
    <div>
    <Link to={`/filter/${state?.slug}`}
    
      onClick={() => {
        filterState(state?.slug);
        openHandler()
      }}
      className="primary text-decoration-none link-color fw-bolder text-size my-1 filterLink d-flex justify-content-between align-items-center"
      style={{ cursor: "pointer" }}
    >
      {state?.title} {state?.provinces.length > 0 && (<FaChevronDown  style={{transform:open ? "rotate(180deg)" : "none",transition:"all 250ms ease-in-out"}} />)} 
    </Link>
   <div className={open ? "ps-3 ms-2 d-flex flex-column" : "d-none"} style={{borderLeft:"1px solid #ddd"}}>
   {state?.provinces.map((province, index) => (
      <Link to={`/filter/${province?.slug}`}
        key={index}
        onClick={() =>
          filterProvince(province?.state_slug, province?.slug)
        }
        className="text-size text-decoration-none link-color primary w-100 m-0 filterLink"
        style={{ cursor: "pointer" }}
      >
         {province?.title}
      </Link>
    ))}
   </div>
   <hr style={{color:"#525558"}} />
  </div>
  )
}
