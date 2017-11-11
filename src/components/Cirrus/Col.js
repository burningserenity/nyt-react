import React from "react";

export const Col = ( { size, children } ) =>
    <div className={`col-${12}`} >
        {children}
    </div>
