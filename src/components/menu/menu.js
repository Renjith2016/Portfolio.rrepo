import React from "react";
import { Link } from 'react-router-dom';
import './menu.css'
export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid text-white bg-dark">
        <Link to="/"><p class="navbar-brand text-white" id="top">Menu</p></Link>
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" id="co">
                <p class="nav-link active" aria-current="page"><Link to="/Super" id="TEXT">Super</Link></p>
              </li>
              <li class="nav-item" id="co">
                <p class="nav-link"><Link to="/Card" id="TEXT">Card</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link"><Link to="/Notification" id="TEXT">Notification</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link" ><Link to="/Login" id="TEXT">Login</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link" ><Link to="/Tech" id="TEXT">Tech</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link" ><Link to="/Social" id="TEXT">Social</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link" ><Link to="/Apps" id="TEXT">Hello</Link></p>
              </li>
              <li class="nav-item"id="co">
                <p class="nav-link" ><Link to="/Feedback" id="TEXT">Feedback</Link></p>
              </li>
              <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu text-white bg-dark">
                  <li><p class="dropdown-item" ><Link to="/Hook" id="TEXT" className="text-success">Hook</Link></p></li>
                  <li><p class="dropdown-item" ><Link to="/Fruit" id="TEXT" className="text-success">Fruit</Link></p></li>
                  <li><p class="dropdown-item" ><Link to="/DateFunction" id="TEXT" className="text-success">DateFunction</Link></p></li>
                  <li><p class="dropdown-item" ><Link to="/Jsondata" id="TEXT" className="text-success">Jsondata</Link></p></li>
                  <li><p class="dropdown-item" ><Link to="/" id="TEXT" className="text-warning">Portfolio</Link></p></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}