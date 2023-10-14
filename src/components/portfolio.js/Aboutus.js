import React from "react";
import './about.css'
import my1 from './my.jpeg'
export function AboutUs(){
    return(
        <> 
        <div class="card p-5" id="abo">
        <h1 className="text-center text-dark pt-5">About Me</h1>
  <div class="row ">
  
    <div class="col-md-6 d-flex justify-content-center align-items-center p-5">
    <img src={my1} class="img rounded w-50" />
    </div>
    <div class="col-md-6 d-flex align-items-center pt-5">
    
      <div class="card-body text-light bg-dark rounded" id="abou">
      
        <h3 class="card-title d-flex justify-content-center">Renjith shiva</h3>
        <p class="card-text text-white">I am Seeking job for Front end Development i am the person of very friendly manner to every one and i can do both the hard work and smart work based on the situation. Very compatative and i will finsh my work with in the time which is assign to me  </p>
        <ul class="list ">
    <li class="list-group-item text-white">Dicision making</li>
    <li class="list-group-item text-white">Adaptability  </li>
    <li class="list-group-item text-white">Time management</li>
  </ul><br/><br/>
  <ul class="list ">
    <h1><li class="list-group-item text-white">Technical Skill</li></h1>
    <li class="list-group-item text-white">HTML </li>
    <li class="list-group-item text-white">CSS</li>
    <li class="list-group-item text-white">JAVA SCRIPT</li>
    <li class="list-group-item text-white">React.JS </li>
    <li class="list-group-item text-white">Graphical Design</li>
  </ul>
  <a href="https://app.luminpdf.com/viewer/6528e50d1ae30c39cf4ca21b" class="btn btn-success d-flex justify-content-center " role="button">Resume</a>
 
      </div>
    </div>
  </div>
</div>

        </>
    )
}