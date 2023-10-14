import React, { useState } from "react";
import './fruit.css'

export function Fruit() {
    const [fruit, setFruit] = useState(0)
    function Fruite() {

        setFruit(fruit + 1)
    }
    const [fruits, setFruits] = useState(0)
    function Fruitsout() {

        setFruits(fruits + 1)
    }


    return (
        <>
            <div className="container-fluid" id="HI">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-5 bg-white p-5" id="BYe">
                        <div className="row-center">
                            <h3><div className="col-12 text-center">Bob ate <a className="text-warning">{fruit}</a> Mangoes <a className="text-warning">{fruits}</a> bannanas </div></h3>
                            <div className="row p-5">
                                <div className="col-6 text-center mt-3">
                                    <button onClick={Fruite} className="bg-white" id="bor"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiono3XS1MXbZeVBeelH9Ui7aRP2o7vtOyg&usqp=CAU" className="w-100" /><br /><br /></button>
                                    <div onClick={Fruite} className="btn btn-primary">Mangoes</div>
                                </div>
                                <div className="col-6 text-center">
                                    <button onClick={Fruitsout} className="bg-white" id="bore"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNp3svFCg7Q7BoKZ9TZcOIV4ieKEWu1fXK1ykmIooJKkAjcwH5kOIrvuag39HYF14RDg&usqp=CAU " className="w-100" /><br /><br /></button>
                                    <div onClick={Fruitsout} className="btn btn-primary">Bannanas</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}