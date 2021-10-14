import React from 'react';
import '../styles/index.css';

export default class Planet extends React.Component {

    render() {
        return (
            <div class="planet">
            <div class="planet-item"><img src="../assets/planets/earth.png" alt="planet" /></div>
            <div class="planet-item"><img src="../assets/planets/planet1.png" alt="planet" /></div>
            <div class="planet-item"><img src="../assets/planets/planet2.png" alt="planet" /></div>
            <div class="planet-item"><img src="../assets/planets/planet3.png" alt="planet" /></div>
            </div>
        )
    }
}