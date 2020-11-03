import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Maintenance from "./Maintenance";
import logo from "../img/logo_neon.png";

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img src={logo} className="logo" alt="Logo" width="50" height="50"/>
                    <Link className={"navbar-brand"} to={"/"}> UniForce </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/users"}> Users </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/landing"}> Maintenance </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/landing" />
                    <Route path="/users" component={Users} />
                    <Route path="/landing" component={Maintenance} />
                </Switch>
            </div>
        )
    }
}

export default Home;