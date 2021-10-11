import React from "react";

const Display = (props) => {

    const {
        buffer,
        result,
        showResult,
        memory,
        operator
    } = props;

    return (<div className="display">
        <div className="main-value">
        {showResult ?
        result :
            buffer || memory || "0"
        }
        </div>
    </div>)
} 

export default Display;