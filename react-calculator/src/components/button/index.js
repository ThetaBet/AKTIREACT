import React from "react"

const Button = (props) => {
    const {
        value, 
        type,
        action,
        label,
        customClass
    } = props;

    return (<div className={`button buttonType-${type} ${customClass}`} onClick={() => {action(value)}}>
        {label}
    </div>)
}

export default React.memo(Button)