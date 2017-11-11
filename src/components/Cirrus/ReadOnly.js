import React from "react";

ReadOnly = (title) => (
    <div className="form-group">
        <input type="Search" className="form-group-input" placeholder={{title}} readonly="" />
        <button className="form-group-btn">Save</button>
    </div>
)
