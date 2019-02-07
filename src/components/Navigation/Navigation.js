'use strict';

import React, {Fragment}  from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './Navigation.scss';

const Navigation = ({options}) => {
    return (
        <Router>
            <Fragment>
                <header className="header-nav nav__bg-color">
                    <nav className="nav-bar">
                        <ul className="nav-bar__block">
                            {
                                options.map(option => (
                                    <li key={option.name} className="nav-bar__element">
                                        <Link to={option.path}>{option.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </header>
                {
                    options.map(option => (
                        <Route key={`route-${option.name}`} path={option.path} exact={option.exact} component={option.component}/>
                    ))
                }
            </Fragment>
        </Router>
    );
}

export default hot(module)(Navigation);