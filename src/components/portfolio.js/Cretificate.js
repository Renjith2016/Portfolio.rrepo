import React from "react";
import Img1 from './certi1.jpg'
import Img2 from './certi2.jpg'
import Img3 from './certi3.jpg'
import './certificate.css'

export function Certificate() {
  return (
    <>
    <div id="certi">
      <h1 className="text-center text-dark pt-5">Certificate</h1>
      <div class="row">
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
          <img src={Img1} className="col-6" id="ig"/>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img2} className="col-6" id="ig"/>
        </div>
        </div>
        <div className="row pt-5">
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img3} className="col-6" id="ig"/>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img1} className="col-6" id="ig"/>
        </div>
        </div>
        </div>

    </>
  )
}