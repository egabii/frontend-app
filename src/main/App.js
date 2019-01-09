import React from 'react';
import {hot}  from 'react-hot-loader';
import './App.scss';

import Navigation from '../components/Navigation/Navigation';
import {Router} from '../components/Router';


const AppRootComponent = () => {
    return (
        <div className="app container">
            <Navigation options={Router.routes} />
        </div>
    )
}

export default hot(module)(AppRootComponent);