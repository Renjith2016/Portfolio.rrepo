import React from "react";
import './social.css'
export function Social() {
    return (
        <>
            <div className="container-fluid background" id="move">
                <div className="container" id="down" >
                    <h1 className="text-center text-white" >SOCIAL BUTTONS</h1>
                    <div className="d-flex justify-content-evenly mt-5" >
                        <button type="button" class="btn btn-warning">Like</button>
                        <button type="button" class="btn btn-light">Comment</button>
                        <button type="button" class="btn btn-info">Share</button>
                    </div>
                </div>
            </div>
        </>
    )
}