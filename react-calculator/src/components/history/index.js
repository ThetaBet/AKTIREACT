import React from "react";

class History extends React.Component {
    constructor(props) {
        super(props)
    }
    

    renderHistoryList = (historyArray) => {
        return (
            <div className="history-container">
                <div>
                    {historyArray.map(el => {
                        return <p>{el.operation} = {el.result}</p>
                    })}
                </div>
            </div>
        )
    }

    render() {
        const {
            historyArray,
            show,
            callBack,
            isEnabled
        } = this.props;
        return (
            <div className={`history-slider ${show ? 'open' : ''}`}>
                <div className="close-icon">
                    <button type="button" onClick={callBack}>Close</button>
                </div>
                {this.renderHistoryList(historyArray)}
            </div>
        )
    }
}

export default History;