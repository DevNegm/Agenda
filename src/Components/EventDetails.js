import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import img from "./assets/istockphoto-1147544807-612x612.jpg"
export default function EventDetails() {
  const params = useParams();
  const APIURL = `https://api.calendariocultural.era-coding.com/api/events/${params.eventSlug}`;
  const key = "edb8224c81b5688bf315026c8ecab9fa1bb6f84f";
  const [data, setData] = useState([]);
  const token = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${key}`,
    },
  };
  const getEvents = () => {
    fetch(APIURL, token)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getEvents();
  }, []);
  console.log(data)
  return (
    <div className="main container">
      <Link to="/" className=" fs-5 primary-color text-decoration-none my-3 d-block" style={{width:"fit-content"}}><BsArrowLeft size={30}/> Volver</Link>
      <div className="row p-md-5  rounded-3 anime bg-light my-3">
        <div className="col-md-6 m-auto">
          <img className="w-100" style={{objectFit:"contain", maxHeight:"400px"}} src={data?.image ? data?.image : img} alt={data?.title} />
        </div>
        <div className="col-md-12">
          <h2 className="fs-md-2 my-3 fw-bold primary-color">{data?.title ? data.title :  <Skeleton />}</h2>
         {data.title ? (
           <div className="d-flex justify-content-between align-items-center flex-wrap">
           <p className="m-0 fw-bold fs-md-5 text-muted d-flex align-items-center gap-2"><AiOutlineClockCircle/>{data?.event_time} {data?.event_date}</p>
           <p className="m-0 fw-bold fs-md-5 text-muted d-flex align-items-center gap-2"><HiLocationMarker className="fs-3"/>{data?.state} /{data?.province} {data?.street && `/` } {data?.street}</p>
           
         </div> 
         ) : (
          <Skeleton  />
         )}
          <hr />
          {data?.description ? (
          <p className="m-0" dangerouslySetInnerHTML={{ __html: data?.description }}  />

          ) : (
            <Skeleton height={10} count={5} />

          )}
          
        
        </div>
      </div>
    </div>
  );
}
