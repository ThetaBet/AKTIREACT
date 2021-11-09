/**
 * Qui abbiamo replicato quasi la stessa logica del componente di classe, ma con un functional component.
 * Questo componente espone diversi effect hooks per mostrare in quali e quanti modi è possibile gestire
 * gli "effetti collaterali"
 */

import React from "react";

const FunctionalComponent = () => {

    const [clickCount, setClickCount]  = React.useState(0);
    const [timer, setTimer] = React.useState(new Date())

    const handleClick = () => {
        setClickCount(clickCount + 1)
    }

    const updateTimer = () => {
        setTimer(new Date())
    }

    React.useEffect(() => {
        console.log(`%c🔴UseEffect with empty array as 2nd parameters, called after 1st render: state: clickCount: ${clickCount}; timer: ${timer.toLocaleTimeString()}`, "background: #813cb0;color:white;padding:5px;border-radius:2px;");
    }, [])

    React.useEffect(() => {
        console.log(`%c🔴⚪UseEffect without 2nd parameters, called after every render: state: ${clickCount}`, "background: #813cb0;color:white;padding:5px;border-radius:2px;");
    })

    React.useEffect(() => {
        console.log(`%c⚪ UseEffect with timer ctrl, called every time timer change: timer: ${timer.toLocaleTimeString()}`, "background: #813cb0;color:white;padding:5px;border-radius:2px;");
        const timerID = setInterval(() => {updateTimer()}, 1000)
        return () => {
            clearInterval(timerID)
            console.log(`%c🔵 UseEffect with timer ctrl, return callback: timer: ${timer.toLocaleTimeString()}`, "background: #813cb0;color:white;padding:5px;border-radius:2px;");
        }
    }, [timer])

    React.useEffect(() => {
        console.log(`%c⚪ UseEffect with clickCount ctrl, called every time clickCount change: state: ${clickCount}`, "background: #813cb0;color:white;padding:5px;border-radius:2px;");
    }, [clickCount])



    return <div>
        <h1>I AM A FUNCTIONAL COMPONENT</h1>
        <button className="btntimer" onClick={handleClick}>
                {clickCount ? 
                `Clicked ${clickCount} ${clickCount === 1 ? 'time' : 'times'}` : 
                'Click me'
            }
            </button>
    </div>
}

export default FunctionalComponent