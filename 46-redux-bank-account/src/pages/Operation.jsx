import React from 'react';
import { useState } from 'react';
import { depositAction, withdrawAction } from '../actions/accountActions';
import { store1 } from '../configureStore/store';


const Operation = () => {
	const [sum, setSum] = useState(1);
	return (
		<div>
			<button onClick={() => store1.dispatch(withdrawAction(sum))}>Windraw</button>
			<input type='number' value={sum} onChange={(e) => {
				setSum(+e.target.value)
			}}></input>
			<button onClick={() => store1.dispatch(depositAction(sum))}>Deposit</button>
		</div>
	)
}

export default Operation;