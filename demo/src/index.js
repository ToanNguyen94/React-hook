import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import Name from './components/Name';
import SelectorEff from './components/SelectorEff';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

// root.render( <Counter /> );
// root.render( <Name /> );
root.render( <SelectorEff /> );