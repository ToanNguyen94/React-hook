import { useEffect, useState } from "react";

export default function SelectorEff() {
	const [ value, setValue ] = useState( '0' );
	const [ selected, setSelected ] = useState( '' );
	let Languages = [ 'Java', 'Angular', 'Javascript', 'PHP' ];
	const Choise = ( e ) => {
		setValue( e.target.value );
	};
	// useEffect( () => {
	// 	setSelected( Languages[ value ] );
	// }, [ value ] );
	const handleChange = () => {
		setSelected( Languages[ value ] );
	};
	return (
		<div>
			Khoa hoc:
			<select onChange={ e => { Choise( e ); } }>
				{
					Languages.map( ( language, index ) => (
						<option value={ index } key={ index }>{ language }</option>
					) )
				}
			</select>
			<button onClick={ handleChange }>Save</button>
			<h2>Your selected: { selected } </h2>
		</div>
	);
}