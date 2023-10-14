import React from "react";
import './port.css'
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 text-white" href="#">Renjith Shiva</a>
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item " id="ho">
              <Link to="/Home"><p class="nav-link active text-white " href="#">Home</p></Link>
              </li>
              <li class="nav-item" id="ho">
              <Link to="/AboutUs"><a class="nav-link active text-white" href="#" >AboutUs</a></Link>
              </li>
             
              <li class="nav-item" id="ho">
              <Link to="/Certificate"><a class="nav-link active text-white">Certificate</a></Link>
              </li>
              <li class="nav-item" id="ho">
              <Link to="/contact"> <a class="nav-link active text-white" href="#">contact</a></Link>
              </li>
              <li class="nav-item" id="ho">
                <Link to="/project"><a class="nav-link text-warning" href="#">Project</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}