
import React from 'react';
import {hot} from 'react-hot-loader';

const Home = () => {
    return (
        <div className="homepage">
            <h1>Home</h1>
            <p>Hi this is the home page</p>
        </div>
    );
}

export default hot(module)(Home);