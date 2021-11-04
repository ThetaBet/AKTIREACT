import React from 'react';
import Display from '../display';
import Button from '../button';
import History from '../history';

import {
    DIGITS,
    OPERATORS,
    TOOLS
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
            firstDigit: 0,
            secondDigit: 0,
            lastOperator: '',
            histroyArrray: [],
            showHistory: false,
            isEnabled: false,
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

    closeHistory = () => {
        this.setState({
            showHistory: false
        })
    }

    handleOperator(newOperator) {
        if (newOperator === "=") {
            this.setState((prevState) => ({
                result: prevState.showResult ?
                this.executeOperations(prevState.result, prevState.operator, prevState.memory) :
                this.executeOperations(prevState.memory, prevState.operator, Number(prevState.buffer)),
                showResult: true,
                buffer: "",
                memory: Number(prevState.buffer ? prevState.buffer : prevState.memory),
                firstDigit: prevState.memory,
                secondDigit: Number(prevState.buffer),
                lastOperator: prevState.operator
            }), () => {
                const {result, histroyArrray, lastOperator, firstDigit, secondDigit} = this.state;
                let item = {
                    operation: `${firstDigit} ${lastOperator} ${secondDigit}`,
                    result: result
                };
                histroyArrray.push(item);

            })       
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

    handleToolsAction(action) {
        switch (action) {
            case 'h':
                this.setState({
                    showHistory: true
                })
                break;
            case 'd':
                this.setState({
                    result: 0
                })
                break;
            default:
                break;
        }
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

    renderHistory() {
        const {histroyArrray, showHistory} = this.state;
        return (
            <History
                historyArray={histroyArrray}
                show={showHistory}
                callBack={this.closeHistory}
            ></History>
        )
    }

    render() {
        const { result,
                operator,
                memory,
                buffer,
                showHistory,
                showResult} = this.state;
        return (
            <div className={`calculator-body ${showHistory ? 'open' : ''}`}>
                <div className="calculator-body-inner">
                    <div className="calculator-front">
                        <div className="upper-wrapper">
                            <Display
                                result={result}
                                operator={operator}
                                showResult={showResult && buffer===""}
                                memory={memory}
                                buffer={buffer}
                            />
                        </div>
                        <div className="tools-wrapper">
                            {TOOLS.map(tool => {
                                return (
                                    <Button
                                        type={tool.type}
                                        label={tool.label}
                                        value={tool.value}
                                        action={this.handleToolsAction.bind(this)}
                                    />
                                )
                            })}
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
                                        action={operator.isSpecial ? this.handleSpecial.bind(this) :  this.handleOperator.bind(this)}
                                        customClass="operator"
                                    ></Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="calculator-back">
                        {this.renderHistory()}
                    </div>
                </div>
            </div>
        )}
}