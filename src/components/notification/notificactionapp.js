import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
export function Notification() {
    return (
        <>
            <div class="d-grid gap-4 col-7 mx-auto">
                <h1 className="text-center mt-5">Notifications</h1>
                <div class="bg-primary p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faCheck} className="text-white" /></div>
                    <div className="col-9">Information message</div>
                    </div>
                    </div>
                    <div class="bg-success p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faCheck} className="text-white" /></div>
                    <div className="col-9">Success message</div>
                    </div>
                    </div>
                    <div class="bg-warning p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faBell} className="text-white" /></div>
                    <div className="col-9">Warning message</div>
                    </div>
                    </div>
                    <div class="bg-danger p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faExclamation} className="text-white" /></div>
                    <div className="col-9">Error message</div>
                    </div>
                    </div>
            </div>
        </>
    )
}