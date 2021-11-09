/**
 * In questo componente di classe mostriamo i vari metodi per "catturare" i vari stati del ciclo di vita di un componente.
 * Questi metodi, come il metodo render sono ereditati dalla classe Component di React, secondo il principio di ereditarietà
 * integrato in ES6. Per poter ereditare tali metodi definiti in React.Component, dobbiamo usare la parola riservata extends
 * che "estende" una classe, inglobando quella che passiamo dopo al termine extends. 
 * 
 * N.B. nonostante l'approccio di cui parliamo scimmiotti la programmazione orientata agli oggetti, JavaScript non è un vero
 * e proprio linguaggio orientato agli oggetti. Si usa dire che JavaScript è un linguaggio orientato ai prototypes.
 * Non è necessario definire una classe vera e propria per creare un componente di classe (che altro non è che zucchero sintattico),
 * ma è possibile integrare direttamente i prototypes di Component, aganciandoli manualmente ad una funzione Js. (confusi?)
 */

import React from "react";

class classComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0
        }
        console.log(`%c🟨classComponent is mounting: actual State is:  ${this?.state?.clickCount}`, "background: #3763ab;color:white;padding:5px;border-radius:2px;");
    }

    componentDidMount() {
        console.log(`%c🟥classComponent is mounted: actual State is:  ${this?.state?.clickCount}`, "background: #3763ab;color:white;padding:5px;border-radius:2px;");

    }

    componentDidUpdate() {
        console.log(`%c⬜classComponent has changed: actual State is:  ${this?.state?.clickCount}`, "background: #3763ab;color:white;padding:5px;border-radius:2px;");
    }

    componentWillUnmount() {
        console.log(`%c🟦classComponent is unmounting: actual State is:  ${this?.state?.clickCount}`, "background: #3763ab;color:white;padding:5px;border-radius:2px;");
    }

    handleClick() {
        this.setState((prevState) => {
            return (
                {
                    clickCount: prevState.clickCount + 1
                }
            )
        })
    }

    render() {
        const { clickCount } = this?.state
        console.log(`%c🟪classComponent is rendering: actual State is:  ${clickCount}`, "background: #3763ab;color:white;padding:5px;border-radius:2px;");
        return (
        <div>
            <h1>I AM A CLASS COMPONENT</h1>
            <button className="btntimer" onClick={this.handleClick.bind(this)}>
                {clickCount ? 
                `Clicked ${clickCount} ${clickCount === 1 ? 'time' : 'times'}` : 
                'Click me'
            }
            </button>
        </div>
        )
    }
}

export default classComponent;