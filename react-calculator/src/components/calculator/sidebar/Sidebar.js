import React from 'react';
import '../styles/index.css';

export default class Sidebar extends React.Component {

    render() {
        return (
        <div className="sidebar">
            <div className="logo-section">
            <img class="logo" src="../assets/logo-vectored.png" alt="logo" />
            </div>
            <div className="main-section">
            <h3>AKTICALCULATOR <span>by THOMAS BELLARDONE</span></h3>
            <p>
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet.                
            lorem ipsum dolor sit amet.                
            lorem ipsum dolor sit amet.                
            </p>
            <h2>Descrizione:</h2>
            <p>
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet.                
            </p>
            <h2>Funzioni utilizzate:</h2>
            <p>
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet, 
            lorem ipsum dolor sit amet.                
            </p>

            </div>
            <div className="footer-section">
            <p><span>REPLY </span> AKTIVE </p>
            <p>TEAM FRONT-END</p>
            </div>
        </div>)
    }
}