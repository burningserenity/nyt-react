import React from "react";

export const SimpleCard = () => (
    <div className="card">
        <div className="card-head">
            <p className="card-head-title">Search</p>
        </div>
        <div className="content">
            <h6>Topic</h6>
            <div className="input-control">
                <input type="text" name="topic" />
            </div>
            <h6>Start Year</h6>
            <div className="input-control">
                <input type="text" name="startYear" />
            </div>
            <h6>End Year</h6>
            <div className="input-control">
                <input type="text" name="endYear" />
            </div>
        </div>
        <div className="action-bar center">
            <button className="btn">Go</button>
        </div>
    </div>
);
