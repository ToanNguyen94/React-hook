import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectCar from './components/SelectCar';
import Demo from './components/Demo';
import Timer from './components/Timer';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

// root.render( <SelectCar /> );
// root.render( <Demo /> );
root.render( <Timer /> );