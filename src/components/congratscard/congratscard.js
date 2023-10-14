import React from "react";
import './card.css'
export function Card() {
    return (
        <>
            <div className="container-fluid" id="bg">
                <h1 className="text-center p-3">Congratulation</h1>
                <div className="text-center bg-info col-lg-4 mx-auto p-5">
                   <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
                   <h3>Renjith</h3>
                   <p>Im study in Kgisl Domain web development</p>
                   <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
                </div>
            </div>
        </>
    )
}