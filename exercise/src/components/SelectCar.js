// import { useEffect, useState } from "react";

// export default function SelectCar() {
// 	const [ selectedCar, setSelectedCar ] = useState( {
// 		car: Cars[ 0 ],
// 		color: Colors[ 0 ]
// 	} );
// 	// const [ selectedColors, setSelectedColors ] = useState( '' );
// 	let Cars = [ 'Audi', 'Mercedes', 'Honda', 'Toyota', 'Ford' ];
// 	let Colors = [ 'Red', 'Green', 'Yellow', 'Blue', 'Magenta' ];

// 	const Choise = ( e ) => {
// 		setSelectedCar( { ...selectedCar, [ e.target.name ]: e.target.value } );
// 		console.log( e );
// 	};

// 	// useEffect( () => {
// 	// 	setSelectedCar( Cars[ selectedCar ] );
// 	// 	console.log( Cars[ selectedCar ] );
// 	// } );

// 	return (
// 		<div className="container">
// 			Select a Car:
// 			<select name="car" onChange={ Choise }>
// 				{
// 					Cars.map( ( car, index ) => (
// 						<option key={ index } value={ index }>{ car }</option>
// 					) )
// 				}
// 			</select>
// 			Select a Color:
// 			<select name="color" onChange={ ChoiseColor }>
// 				{
// 					Colors.map( ( color, index ) => (
// 						<option key={ index } value={ color }>{ color }</option>
// 					) )
// 				}
// 			</select>
// 			<p>You selected: { selectedCar } </p>

// 		</div>
// 	);
// }