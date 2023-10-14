import React from "react";
import './tech.css'
export function Tech(){
    return(
        <>
            <div className="container text-center">
                <h1 className="mt-3">Learn 4.0 Technologies</h1>
                <p className="mt-3">Get trained by alumni of IITs and top companies like Amazon, Microsoft, intel Nvidia, Qualcomm,<br /> etc. Learn directly from professionals involved in Product Development</p>
                <div className="d-grid">
                    <div className="row gap-5 d-flex justify-content-around mt-4">
                        <div className="col-md-12 col-lg-5 col-12" id="COL">
                            <div className="card" id="CARD">
                            <div className="card-body">
                                        <h5 className="card-title">Data Scientist</h5>
                                        <p className="card-text">Data scientists use statistical methods to collect . Problem-solving skills. Data scientists collection and cleaning and in developing statistical models and algorithms.</p>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                <img src="https://img.freepik.com/premium-vector/man-working-laptop-cartoon-illustration_607277-152.jpg"width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5" id="COL1">
                            <div className="card" id="CARD">
                            <div className="card-body">
                                        <h5 className="card-title">IT Developer</h5>
                                        <p className="card-text">An IT Developer creates tailored programmes based on a specification agreed with their client and including all of the requirements and specific technical features. </p>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                <img src="https://i.pinimg.com/originals/b5/6d/b8/b56db8f39923b667be54225ca0a4ee8d.jpg" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-12" id="COL2">
                            <div className="card" id="CARD">
                            <div className="card-body">
                                        <h5 className="card-title">VR Developer</h5>
                                        <p className="card-text">Virtual reality and augmented reality developers are the creative minds behind extended reality programs. first few years in a position in either field typically</p>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                <img src="https://www.arena-multimedia.com/uploads/sub_course_images/Game-Development-vr.png" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5" id="COL3">
                            <div className="card" id="CARD">
                            <div className="card-body">
                                        <h5 className="card-title">ML Engineer</h5>
                                        <p className="card-text">A machine learning engineer (ML engineer) is a programmer who designs and builds software that can automate artificial intelligence and machine learning (AI/ML)</p>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                <img src="https://as2.ftcdn.net/v2/jpg/01/86/82/09/1000_F_186820934_OJB7mPlfv4uP4k9D1Emsd5KqU7g1Slxg.jpg" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    