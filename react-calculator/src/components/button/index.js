import React from "react"

const Button = (props) => {
    const {
        value, 
        type,
        action,
        label
    } = props;

    return (<div className={`button buttonType-${type}`} onClick={() => {action(value)}}>
        {label}
    </div>)
}

export default React.memo(Button)