import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export function Detailsjson() {
    const [json, setjson] = useState([])
    var { id } = useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(response => response.json())
            .then(viewdet => setjson(viewdet))
    })
    return (
        <>
            <div className="card col-lg-4">
                <img src={json.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{json.title}</h5>
                    <p className="card-text">{json.description}</p>
                    <p className="card-text">{json.price}</p>
                </div>
            </div>
        </>
    )
}