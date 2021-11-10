import React from 'react';
import Display from '../display';
import button from '../button';
import {
    DIGITS,
    OPERATORS
} from '../../utilities/constants';

import './styles/index.css';

const FuncCalculator = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return 
        }
    }


    const [memory, setMemory] = React.useState(0)
    const [buffer, setBuffer] = React.useState('')
    const [action, setOperator] = React.useState(null)
    const [state, dispatch] = React.useReducer(reducer, 0)
    const [showResult, changestatte] = React.useState(false)


    React.useEffect(() => {

    }, [])

    return (
        <div></div>
    )
}

export default FuncCalculator