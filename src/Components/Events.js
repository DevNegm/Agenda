import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineFilterList } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "./assets/istockphoto-1147544807-612x612.jpg";
import errImg from "./assets/undraw_Empty_street_re_atjq.png"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import shortid from 'shortid';
import States from "./States";
export default function Events() {
  // api key and url
  const APIURL = "https://api.calendariocultural.era-coding.com/api";
  const key = "edb8224c81b5688bf315026c8ecab9fa1bb6f84f";

  // states
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(16);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open,setOpen] = useState(false)
  // pagination logic
  // get current events
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentEvents = events?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = events?.length;

  // dropdown
  let dropdownBtn = document.querySelectorAll(".filterLink");
  for (let i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener("click", () => {
      for (let j = 0; j < dropdownBtn.length; j++) {
        dropdownBtn[j].classList.remove("primaryActive");
      }
      dropdownBtn[i].classList.add("primaryActive");
    });
  }

  let pagin = document.querySelectorAll(".pagin");
  for (let i = 0; i < pagin.length; i++) {
    pagin[i].addEventListener("click", () => {
      for (let j = 0; j < pagin.length; j++) {
        pagin[j].classList.remove("pagiBtn");
      }
      pagin[i].classList.add("pagiBtn");
    });
  }

  // pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  // change page
  const paginate = (number) => setCurrentPage(number);

  // Token
  const token = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${key}`,
    },
  };

  // to open filter in mobile
  const handleOpen = () => {
    setOpen(!open)
  }

  // get all events
  const getEvents = () => {
    fetch(`${APIURL}/events/`, token)
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }  
        return res.json();
      })
      .then(data => {
         setEvents(data);
         setLoading(false)
         setError(null)
       })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
        setLoading(false)
      })
  };

  // get all categories with sub-categories in it
  const getCategories = () => {
    fetch(`${APIURL}/categories/`, token)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  // filter by category
  const filterCategory = (catName) => {
    fetch(`${APIURL}/events/filter/${catName}/`, token)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  // filter by sub-category
  const filterSubCategory = (catName, subName) => {
    fetch(`${APIURL}/events/filter/${catName}/${subName}`, token)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  // get all states with provinces in it
  const getStates = () => {
    fetch(`${APIURL}/states/`, token)
      .then((res) => res.json())
      .then((data) => setStates(data));
  };

  // filter by location (state)
  const filterState = (stateName) => {
    fetch(`${APIURL}/events/filter-location/${stateName}/`, token)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  // filter by location (province)
  const filterProvince = (stateName, provinceName) => {
    fetch(
      `${APIURL}/events/filter-location/${stateName}/${provinceName}/`,
      token
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  // useEffect to run the functions to get all the data
  useEffect(() => {
    getCategories();
    getStates();
    getEvents();
  }, []);

  return (
    <div className="main container-fluid px-md-5 px-3 py-5">
       {error ? <div className="text-danger fs-3 d-flex flex-column gap-3 align-items-center justify-content-center text-center" style={{minHeight:"80vh"}}>{error} <img style={{maxWidth:"800px", width:"100%"}} src={errImg} /></div> : 
         <div className="row justify-content-between">
       
       {/* left filter column */}
       {!loading ? (
          <div style={{minWidth:"300px"}} className="col-md-2 my-md-0 my-5 d-lg-flex d-none justify-content-center">
          <div
            className="w-100 p-4 rounded-3"
            style={{ backgroundColor: "#F8F7FA" }}
          >
            <p className="fs-3 fw-bold text-secondary d-flex justify-content-between align-items-center">
            Filtro <MdOutlineFilterList />
            </p>
           <div className="">
           <Link to="/"
              onClick={() => {
                getEvents();
              }}
              className="text-size primary text-decoration-none link-color my-1 filterLink primaryActive "
              style={{ cursor: "pointer" }}
            >
              Todas
            </Link>
            <hr />
            <p className="text-black-50 m-0 text-size fw-bold">Categorias</p>
            {categories?.map((category, index) => (
              <div  key={index}>
                <Link to={`/filter/${category?.slug}`}
                 
                  onClick={() => {
                    filterCategory(category?.slug);
                  }}
                  className="text-size primary text-decoration-none link-color my-1 filterLink"
                  style={{ cursor: "pointer" }}
                >
                  {category?.title}
                </Link>

                {category?.subcategories?.map((sub, index) => (
                  <Link to={`/filter/${sub.slug}`}
                    key={index}
                    onClick={() => {
                      filterSubCategory(sub?.category_slug, sub.slug);
                    }}
                    className="text-size primary m-0 text-decoration-none link-color filterLink"
                    style={{ cursor: "pointer" }}
                  >
                    - {sub?.title}
                  </Link>
                ))}
              </div>
            ))}
            <hr />
            <p className="text-black-50 m-0 text-size fw-bold">Lugar</p>
            {states?.map((state, index) => (
             <States filterState={filterState} filterProvince={filterProvince} key={index} state={state}/>
            ))}
           </div>
          </div>
        </div>
       ) : (
         <div className="col-md-2 d-lg-flex d-none my-md-0 my-5 justify-content-center">
         <div
           className="w-100 p-4 rounded-3"
           style={{ backgroundColor: "#F8F7FA" }}
         >
          
           <Skeleton height={30} />
           <Skeleton height={30} />
           <Skeleton count={5} />
           <Skeleton height={30} />
           <Skeleton height={30} />
           <Skeleton count={5} />
           <Skeleton height={30} />
           <Skeleton height={30} />
           <Skeleton count={5} />
           <Skeleton height={30} />
           <Skeleton height={30} />
           <Skeleton count={5} />
         </div>
       </div>
       )}
       {/* for mobile */}
       {!loading ? (
          <div style={{minWidth:"300px",width:"100%"}} className="col-lg-2  my-md-0 my-3 d-flex d-lg-none justify-content-center">
          <div
            className="w-100 rounded-3 border px-4 py-2 mb-3"
            style={{ backgroundColor: "#F8F7FA" }}
          >
            <p onClick={handleOpen} style={{cursor:"pointer",paddingBottom:open && "1rem" }} className="fs-4 fw-bold m-0 d-flex justify-content-between align-items-center">
            Filtro <FaChevronDown style={{transform:open ? "rotate(180deg)" : "none",transition:"all 250ms ease-in-out"}} />
            </p>
           <div className={open ? "d-block" : "d-none"} style={{height:"400px",overflow:"auto"}}>
           <p
              onClick={() => {
                getEvents();
              }}
              className="text-size primary my-1 filterLink primaryActive"
              style={{ cursor: "pointer" }}
            >
              Todas
            </p>
            <hr />
            <p className="text-black-50 m-0 text-size fw-bold">Categorias</p>
            {categories?.map((category, index) => (
              <div  key={index}>
                <p
                 
                  onClick={() => {
                    filterCategory(category?.slug);
                  }}
                  className="text-size primary my-1 filterLink"
                  style={{ cursor: "pointer" }}
                >
                  {category?.title}
                </p>

                {category?.subcategories?.map((sub, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      filterSubCategory(sub?.category_slug, sub.slug);
                    }}
                    className="text-size primary m-0 filterLink"
                    style={{ cursor: "pointer" }}
                  >
                    - {sub?.title}
                  </p>
                ))}
              </div>
            ))}
            <hr />
            <p className="text-black-50 m-0 text-size fw-bold">Lugar</p>
            {states?.map((state, index) => (
             <States filterState={filterState} filterProvince={filterProvince} key={index} state={state}/>
            ))}
           </div>
          </div>
        </div>
       ) : (
         <div className="col-lg-2 d-lg-none d-flex my-md-0 my-5 justify-content-center">
         <div
           className="w-100 p-4 rounded-3"
           style={{ backgroundColor: "#F8F7FA" }}
         >
          
           <Skeleton height={30} />
           
         </div>
       </div>
       )}
      

       {/* events items */}
       <div className="col">
         <div className="d-flex justify-content-between mb-3">
          {!loading ?  (<h2 className="primary-color fs-4 mb-3">Eventos</h2>) : (<Skeleton />)}
         </div>
         <div  className="d-flex flex-wrap align-items-stretch justify-content-lg-start justify-content-center gap-4">
           {!loading ? (
             currentEvents?.map((event, index) => {
               return (
      
                 <Link
                   to={`/event/${event.slug}`}
                   key={index}
                   style={{overflow:"hidden"}}
                   className="text-decoration-none anime rounded-2 d-flex flex-column text-dark p-0 event-card"
                 >
                   <div className="card-img p-0">
                     <img
                       className="w-100"
                       style={{ height: "200px" }}
                       src={event?.image ? event?.image : img}
                       alt={event?.title}
                     />
                   </div>

                   <div className="d-flex flex-column p-3 card-body">
                     <h2 className="event-title  m-0 fw-bold fs-5 primary-color">
                       {event?.title}
                     </h2>

                     <div className="d-flex flex-column text-muted pt-2">
                       <div className="d-flex justify-content-between align-items-center">
                         <p className="m-0">
                           <AiOutlineClockCircle /> {event?.event_time}  
                         </p>
                         <p className="m-0">{event?.event_date}</p>
                       </div>

                      <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0 event-title">
                         <HiLocationMarker /> {event?.state}
                       </p>
                       <p className="m-0 event-title">{event?.province}</p>
                      </div>
                       <p className="m-0 event-title">{event?.street}</p>
                      
                     </div>

                     <div className="d-flex flex-column pt-2">
                       <div className="pt-2 card-desc m-0">{event?.brief}</div>
                     </div>
                   </div>
                   <div className="px-3 pb-3">
                     <button className="bg-color w-100 border-0 text-white mt-auto px-4 py-2 rounded-1">
                     Leer más
                     </button>
                   </div>
                 </Link>
                
               );
             })
         
           ) : (
             <div className="d-flex flex-wrap align-items-stretch justify-content-md-start justify-content-center gap-4">
                {Array(6)
             .fill(0)
             .map(() => (
               <div 
               key={shortid.generate()}
               className="text-decoration-none d-flex flex-column text-dark p-0 event-card"
             >
               <div className="card-img p-0">
                 <Skeleton height={200} />
               </div>

               <div className="d-flex flex-column p-3 card-body">
                 <h2 className="event-title  m-0 fw-bold fs-5 primary-color">
                   <Skeleton />
                 </h2>

                 <div className="d-flex flex-column text-muted pt-2">
                   <div className="d-flex gap-2">
                     <p className="m-0">
                       <Skeleton />
                     </p>
                     <p className="m-0">
                       {" "}
                       <Skeleton />
                     </p>
                   </div>

                   <p className="m-0 event-title">
                     <Skeleton />
                   </p>
                   <p className="m-0 event-title">
                     {" "}
                     <Skeleton />
                   </p>
                 </div>

                 <div className="d-flex flex-column pt-2">
                   <div className="pt-2 card-desc m-0">
                     {" "}
                     <Skeleton count={3} />
                   </div>
                 </div>
               </div>
               <div className="px-3 pb-3">
                 <Skeleton />
               </div>
             </div>
             ))}
             </div>
             
             
            
           )}
         </div>
        
         {/* pagination */}
         <div className="py-3">
           {events?.length > 0 && (
             <div className="row">
               <nav aria-label="Page navigation example d-flex justify-content-center col-12">
                 <ul className="pagination justify-content-center my-4 ">
                   {pageNumbers.map((number) => (
                     <li className="page-item" key={number}>
                       <p
                         onClick={() => paginate(number)}
                         className="page-link primary-color shadow-none m-0 pagin"
                         style={{ cursor: "pointer" }}
                       >
                         {number}
                       </p>
                     </li>
                   ))}
                 </ul>
               </nav>
             </div>
           )}
         </div>
       </div>
         </div>
     
     }
    
    </div>
  );
}
