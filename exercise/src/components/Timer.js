import { useEffect, useState } from "react";

export default function Timer() {
	const [ time, setTime ] = useState( '10' );

	useEffect( () => {

		if ( time > 0 ) {
			setTimeout( () => {
				setTime( time - 1 );
			}, 1000 );
		}
		else { 
			setTime( 0 );
			alert( 'Time up' );
		}
	}, [ time ] );

	return (
		<div>
			<p>Count down from: { time }</p>
		</div>
	);
}