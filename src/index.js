import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.hydrate(<App name='Person'/>, document.getElementById('root'));
