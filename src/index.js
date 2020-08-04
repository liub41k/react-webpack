import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import './styles/index.sass';

ReactDOM.render(<App />, document.querySelector('[data-app="main"]'));
