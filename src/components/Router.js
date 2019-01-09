'use strict';

import Home from './Home/Home';
import About from './About/About';

export const Router = (() => {
    const routes = [
        {
            path: '/',
            name: 'Home',
            exact: true,
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ];

    return {
        routes
    }
})();