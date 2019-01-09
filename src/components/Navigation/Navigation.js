'use strict';

import React, {Fragment}  from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Navigation = ({options}) => {
    return (
        <Router>
            <Fragment>
                <nav>
                    <ul>
                        {
                            options.map(option => (
                                <li key={option.name}>
                                    <Link to={option.path}>{option.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

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