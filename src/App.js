import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './styles/App.css';
import Login from "./Login";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import RegisterPage from "./RegisterPage";

// Uses material-ui to provide mateirla design components
class App extends Component {
    componentDidMount() {
        document.title = "MoC Tracker";
    }
    render() {
        return (
            <HashRouter>
                <div>
                    {/* This is the header of the app */}
                    <div className="App-header">
                        {/* This is where the title goes */}
                        <h1 className="headerTitle">MoC tracker</h1>
                        {/* This is where the navigation list will go*/}
                        <div className="headerList">
                            <ul>
                                <li ><NavLink to="/">Home</NavLink></li>
                                <li ><NavLink to="/Login">Login</NavLink></li>
                                <li ><NavLink to="/SearchPage">Search</NavLink></li>
                                <li ><NavLink to="/RegisterPage">Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="App-transition"></div>
                    <div className="App-body">
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/SearchPage" component={SearchPage}/>
                        <Route exact path="/RegisterPage" component={RegisterPage}/>
                    </div>
                </div>
            </HashRouter>

        );
    }
}

export default App;
