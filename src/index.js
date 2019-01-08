import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.hydrate(<App name='John'/>, document.getElementById('root'));
