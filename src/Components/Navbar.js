import React from "react";
import { Link } from "react-router-dom";
import bgImg from "./assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-md-5 px-3">
        <Link to="/" className="col-2 fs-4 fw-bold">
          <img src={bgImg} width="200" alt="navbar logo" />
        </Link>
        <button
          className="navbar-toggler border-0"
          style={{ boxShadow: "none" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className=" text-decoration-none fw-bold primary-color"
              >
                Inicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
