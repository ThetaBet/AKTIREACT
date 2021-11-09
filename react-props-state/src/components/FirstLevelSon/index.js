import React from "react";
import DataFlowsDown from '../DataFlowsDown'

class FirstLevelSon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skillList: ['Forza', 'Costituzione', 'Intelligenza', 'Carisma', 'Linguaggio'],
            lastTouchedInList: null
        }
        this.handleStateUp = this.handleStateUp.bind(this);
    }

    handleStateUp(id) {
        this.setState({
            lastTouchedInList: id
        })
    }

    render() {

        return (
            <div className="subWrapper">
                <h2>{this.props.name} card</h2>
                {this.state.skillList.map((sonCardId) => {
                    return (<DataFlowsDown
                        name={this.props.name}
                        index={sonCardId}
                        handleSelectedCard={this.handleStateUp}
                        isSelected={this.state.lastTouchedInList === sonCardId}
                        changeInfo={this.props.changeInfo}
                    ></DataFlowsDown>)
                })}
            </div>
        )
    }
}

export default FirstLevelSon