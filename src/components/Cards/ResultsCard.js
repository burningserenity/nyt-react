import React from "react";

export const ResultsCard = ( { heading, children } ) => (
    <div className="card">
        <div className="card-head">
            <p className="card-head-title">{heading}</p>
        </div>
        <div className="content">
            {children}
        </div>
    </div>
);
