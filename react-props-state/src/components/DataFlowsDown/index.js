import React from "react";
import InfoData from "../InfoData";

class DataFlowsDown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState((prevState) => {
            return (
                {
                    count: prevState.count + 1
                }
            )
        }, () => {
            if (this.props.changeInfo) {
                this.props.changeInfo({
                    name: this.props.name,
                    skillName: this.props.index,
                    skillValue: this.state.count
                })
            }
        })
    }

    render() {
        return (
        <div className={`subChild ${this.props.isSelected ? 'active' : ''}`} onClick={this.props.isSelected ? () => this.handleClick() : () => this.props.handleSelectedCard(this.props.index)}>
            <h3>{this.props.index} di {this.props.name}</h3>
            <InfoData count={this.state.count}></InfoData>
            <div>{this.props.isSelected ? 'Clicca per aumentare la skill!' : 'Seleziona la card!'}</div>
        </div>
        )
    }


}

export default DataFlowsDown