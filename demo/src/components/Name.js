import { useState } from "react";

export default function Name() {
	const [ name, setName ] = useState( '' );
	const [ name2, setName2 ] = useState( '' );
	const handleChange = ( e ) => {
		setName( e.target.value );
	};
	const handleClick = () => {
		setName2( name );
	};
	return (
		<div className="container">
			<p>Hello: { name2 }</p>
			<input type="text" onChange={ handleChange }></input>
			<button onClick={ handleClick }>
				Save
			</button>
		</div>
	);
}