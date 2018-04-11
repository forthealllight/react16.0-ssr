import React from 'react';
import {render,hydrate} from 'react-dom';
import HomePage from './components/homepage/index.js';
// render(<HomePage/>,document.getElementById('app'));
hydrate(<HomePage/>,document.getElementById('app'));
