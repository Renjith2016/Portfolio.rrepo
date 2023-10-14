import React from "react";
import './feedback.css'
import { Link } from 'react-router-dom'
export function Feedback() {
    return (
        <>
            <div className="container-fluid" id="FBBODY">
                
                <div className="d-flex justify-content-center pt-5">
                    <div className="col-lg-5 bg-white p-5" id="FEEDMT">
                        <div className="row-center">
                            <div className="col-12">How satisfied are you with our customer support performance?</div>
                            <div className="row">
                                <div className="col-4">
                                    <Link to='/FeedBack1'><img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f62d.svg" className="w-50 mt-5" /></Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/FeedBack1'><img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f610.svg" className="w-50 mt-5" /></Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/FeedBack1'><img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f600.svg" className="w-50 mt-5" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}