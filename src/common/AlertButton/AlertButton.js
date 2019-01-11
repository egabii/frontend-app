'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';

const AlertButton = ({clickHandler, label}) => <button onClick={clickHandler}>{label}</button>;

export default AlertButton;