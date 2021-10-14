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
            showResult: false
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
                result: prevState.showResult ?
                    this.executeOperations(prevState.result, prevState.operator, prevState.memory) :
                    this.executeOperations(prevState.memory, prevState.operator, Number(prevState.buffer)),
                showResult: true,
                buffer: "",
                memory: Number(prevState.buffer ? prevState.buffer : prevState.memory)
            }))
        } else {
            this.setState((prevState) => ({
                operator: newOperator,
                memory: Number(prevState.buffer),
                buffer: "",
                showResult: false
            }))
        }
    }

    handleDigit(digitValue) {
        this.setState((prevState) => ({
            buffer: prevState.buffer.length <= 12 ? `${prevState.buffer}${digitValue}` : prevState.buffer
        }))
    }

    calcPercentage(partial, total) {
        return (total * partial) / 100;
    }

    handleSpecial(value) {
        const { operator, showResult } = this.state
        switch (value) {
            case 'canc':
                this.setState({
                    result: 0,
                    showResult: false,
                    buffer: "",
                    memory: 0,
                    operator: null
                })
                break
            case 'backSpace':
                this.setState((prevState) => ({
                    buffer: prevState.buffer.substring(0, prevState.buffer.length - 1)
                }))
                break
            case 'percentage':
                if (!showResult && operator) {
                    this.setState((prevState) => ({
                        result: prevState.operator === "+" || prevState.operator === "-" ?
                            this.executeOperations(prevState.memory, prevState.operator, this.calcPercentage(Number(prevState.buffer), prevState.memory)) :
                            prevState.operator === "*" ?
                                this.calcPercentage(Number(prevState.buffer), prevState.memory) :
                                this.executeOperations(prevState.memory, prevState.operator, Number(prevState.buffer) / 100),
                        showResult: true,
                        buffer: "",
                        memory: Number(prevState.buffer ? prevState.buffer : prevState.memory)
                    }))
                }
                break
            default:
                return
        }
    }

    render() {
        const { result, operator, memory, buffer, showResult } = this.state;
        return (
            <div className="container">
                <Sidebar />
                <Planet />

                <div className="calculator-body">
                    <div className="upper-wrapper">
                        <Display
                            result={result}
                            operator={operator}
                            showResult={showResult && buffer === ''}
                            memory={memory}
                            buffer={buffer}
                        />
                    </div>
                    <div className="bottom-wrapper">
                        <div className="memory-wrapper">

                        </div>
                        <div className="digit-wrapper">
                            {DIGITS.map((digit) => {
                                return (
                                    <Button
                                        value={digit.value}
                                        key={digit.key}
                                        label={digit.key}
                                        type={digit.type}
                                        action={this.handleDigit.bind(this)}
                                        customClass="digit"
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
                                    action={operator.isSpecial ? this.handleSpecial.bind(this) : this.handleOperator.bind(this)}
                                    customClass="operator"
                                ></Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>)
    }
}