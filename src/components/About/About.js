import React from 'react';
import {hot} from 'react-hot-loader';

const About = () => {
    return (
        <div className="aboutpage">
            <h1>About</h1>
            <p>Hi this is the about page</p>
        </div>
    );
}

export default hot(module)(About);