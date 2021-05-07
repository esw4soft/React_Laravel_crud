/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');


require("./bootstrap");
import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Second from "./components/Second";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    activeClassName="selected"
                                    to="/"
                                >
                                    home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="selected"
                                    to="/second"
                                >
                                    second
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/second" component={Second}></Route>
                    {/* <Route path="/third" component={Third}></Route> */}
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
