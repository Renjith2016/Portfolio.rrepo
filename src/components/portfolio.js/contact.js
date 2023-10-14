import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './contact.css'

export function Contact() {
  return (
    <>
    <div className="container-fluid bg-dark">
      <div class="row p-5">
      <h1 className="text-center text-dark pt-5">Contact</h1>
      
        <div class="col-sm-4 col-md-4 col-lg-4 pt-4">
          <div class="card bg-secondary text-white p-5" >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            <div class="card-body">
              <h5 class="card-title text-center">Linkedin</h5>
              <p class="card-text text-center pt-4"> This is my Linkedin Profile Do check that </p>
              <div className="col-12 d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/renjith-shiva-a-u-60b478286/" class="btn btn-success">View</a></div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 pt-4">
          <div class="card bg-secondary text-white p-5" >
            <FontAwesomeIcon icon={faSquarePhone} size="2xl" />
            <div class="card-body">
              <h5 class="card-title text-center">Telephone</h5>
              <p class="card-text text-center pt-4">If there is any vacancy please contact me</p>
              <div className="btn d-flex justify-content-center"> <a href="dialto:824855297">8248555297</a></div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 pt-4">
          <div class="card bg-secondary text-white p-5" >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <div class="card-body">
              <h5 class="card-title text-center">G-Mail </h5><br/>
              <p class="card-text text-center ">This is my Gmail id You can Contact me<br/></p>
               <div className="btn d-flex justify-content-center"> <a href="mailto:renjith20.sr@gmail.com">renjith20.sr@gmail.com</a></div>
              <div className="col-12 d-flex justify-content-center">
              </div>
            </div>
          </div>
        </div>
        
        <div class=" row text-warning p-5" >
          <div className="col-lg-6 col-md-4">
         <h2>Address</h2>
         <h5>384/C Jiths<br/> Nivas Near Mirmala Hostal <br/>Finger Post Ooty <br/> Pin:643006</h5>
         </div>
        <div className="col-lg-6 col-md-4">
          <h1 className="p-5 text-lg">THANK  YOU</h1>
        </div>
      </div>

        </div>
        </div>
    </>
  )
}