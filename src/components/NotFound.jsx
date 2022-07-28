import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="text-danger">Sorry...Are you lost?</h2>
            <Link to="/" className="btn btn-info">Take Me Home</Link>
        </div>
    );
};

export default NotFound;