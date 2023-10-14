import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Jsondata() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(viewdata => setData(viewdata))
    })
    return (
        <>
            <h1 className="text-center">SHOPPING</h1>
            <div className="container-fluid row">

                {
                    data.map((value, index) => (
                        <>
                            <div class="card col-lg-3 " >

                                <img src={value.image} class="card-img-top" alt="..." />
                                <div class="card-body bg-success">
                                    <h5 class="card-title">{value.title}</h5>
                                    <p class="card-text">{value.price}</p>
                                    <StarRatings rating={value.rating.rate} starRatedColor="violet" /><br /><br /><br />
                                    <Link to={`/Detailsjson/${value.id}`}><p class="btn btn-secondary">TAP</p></Link>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}