
import React from 'react';
import {hot} from 'react-hot-loader';

import AlertButton  from '../../common/AlertButton/AlertButton';

const Home = () => {
    const triggerAlert = () => {
        alert('Hello World');
    };

    return (
        <div className="homepage">
            <h1>Home</h1>
            <p>Hi this is the home page</p>
            <AlertButton clickHandler={triggerAlert} label={'This is a button'} />
        </div>
    );
}

export default hot(module)(Home);