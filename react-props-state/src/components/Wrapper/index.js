import React from "react";
import FirstLevelSon from '../FirstLevelSon'

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            skillName: null,
            skillValue: null
        }
        this.handleChangeInfo = this.handleChangeInfo.bind(this)
    }

    handleChangeInfo(detail) {
        this.setState({
            name: detail.name,
            skillName: detail.skillName,
            skillValue: detail.skillValue
        })
    }


    render() {
        return (
            <div className="wrapper">
                <h1>I AM FATHER WRAPPER COMPONENT</h1>
                <div className="userCard">
                <FirstLevelSon name="John" changeInfo={this.handleChangeInfo}></FirstLevelSon>
                <FirstLevelSon name="Doe" changeInfo={this.handleChangeInfo}></FirstLevelSon>
                <FirstLevelSon name="Foo" changeInfo={this.handleChangeInfo}></FirstLevelSon>
                <FirstLevelSon name="Bar" changeInfo={this.handleChangeInfo}></FirstLevelSon>
                </div>
                {this.state.name &&
                 this.state.skillName &&
                 this.state.skillValue && 
                (<div className="infoElement">{this.state.name} ha raggiunto il livello {this.state.skillValue} nella statistica {this.state.skillName}</div>)}
            </div>
        )
    }
}



export default Wrapper;