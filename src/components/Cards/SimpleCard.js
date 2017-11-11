import React from "react";

export const SimpleCard = props => (
    <div className="card">
        <div className="card-head">
            <p className="card-head-title">Search</p>
        </div>
        <div className="content">
            <h6>Topic</h6>
            <div className="input-control">
                <input type="text" name="topic" value={props.q} onChange = {props.changedHandler}/>
            </div>
            <h6>Start Year</h6>
            <div className="input-control">
                <input type="text" name="startYear" value={props.begin_date} onChange = {props.changedSHandler}/>
            </div>
            <h6>End Year</h6>
            <div className="input-control">
                <input type="text" name="endYear" value={props.end_date} onChange = {props.changedEHandler}/>
            </div>
        </div>
        <div className="action-bar center">
            <button onClick={props.clicked} className="btn">Go</button>
        </div>
    </div>
);
