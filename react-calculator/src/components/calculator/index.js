import React from 'react';
import Display from '../display';
import Button from '../button';
import Sidebar from './sidebar/Sidebar';
import Planet from './planet-animation/Planet';
import {
    DIGITS,
    OPERATORS
} from '../../utilities/constants';

import './styles/index.css';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            operator: null,
            memory: 0,
            buffer: '',
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    executeOperations(firstTerm, operator, secondTerm) {
        switch (operator) {
            case "+":
                return firstTerm + secondTerm
            case "-":
                return firstTerm - secondTerm
            case "*":
                return firstTerm * secondTerm
            case "/":
                return firstTerm / secondTerm
            default: 
            return secondTerm
        }
    }

    handleOperator(newOperator) {
        if (newOperator === "=") {
            this.setState((prevState) => ({
                result: this.executeOperations(prevState.memory, prevState.operator, Number(prevState.buffer)),
                operator: newOperator,
                buffer: ""
            }))       
        } else {
                this.setState((prevState) => ({
                    operator: newOperator,
                    memory: Number(prevState.buffer),
                    buffer: ""
                }))
            }
    }

    handleDigit(digitValue) {
        this.setState((prevState) => ({
            buffer: `${prevState.buffer}${digitValue}`
        }))
    }
    setAnimation = () => {
        document.querySelector("button").onclick = function() {
            document.querySelector("button").style.animation = "bounceTopBottom .6s linear"
        }
    }    

    render() {
        const { result, operator, memory, buffer} = this.state;
        return (
        <div className="container">
            <Sidebar />
            <Planet />

        <div className="calculator-body">
            <div className="upper-wrapper">
                <Display
                    result={result}
                    operator={operator}
                    showResult={operator==="=" && buffer===""}
                    memory={memory}
                    buffer={buffer}
                />
            </div>
            <div className="bottom-wrapper">
                <div className="digit-wrapper">
                    {DIGITS.map((digit) => {
                        return (
                            <Button
                                value={digit.value}
                                key={digit.key}
                                label={digit.key}
                                type={digit.type}
                                action={this.handleDigit.bind(this)}
                                onClick={setAnimation}
                            ></Button>
                        )
                    })}
                </div>
                <div className="operators-wrapper">
                    {OPERATORS.map(operator => (
                        <Button
                            value={operator.value}
                            key={operator.key}
                            label={operator.key}
                            type={operator.type}
                            action={this.handleOperator.bind(this)}
                        ></Button>
                    ))}
                </div>
            </div>
        </div>
    </div>)
    }
}