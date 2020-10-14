import React from "react";
import '../../styles/components/Line.css'

function Line({children}) {
    return (
        <div className="line">
            {children}
        </div>
    );
}

export default Line;