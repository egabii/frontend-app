import React from 'react';
import {hot} from 'react-hot-loader';

import './Grid.scss';

const GridRow = ({children, styles = []}) => {
    return (
        <div className={ `grid-row ${styles.join(' ')}`}>
            {children}
        </div>
    )
};

const GridCol = ({children, styles = []}) => {
    return (
        <div className={ `grid-item col-flex ${styles.join(' ')}`}>
            {children}
        </div>
    )
};


export {
    GridRow,
    GridCol
}