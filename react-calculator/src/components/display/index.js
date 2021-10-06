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
        {showResult ?
        result :
        buffer || '0'}
    </div>)
} 

export default Display;