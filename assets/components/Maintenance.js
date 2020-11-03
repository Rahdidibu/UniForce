import React, {Component} from 'react';
import logo from '../img/logo_neon.png';
import "../styles/app.css"
import {Animated} from "react-animated-css"

class Maintenance extends Component {

    render() {
        return (
            <div className="App">
                <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
                    <img src={logo} className="logo" alt="Logo"/>
                    <h1 className="waiting-text"> Site en construction</h1>
                </Animated>
            </div>
        )
    }
}

export default Maintenance;