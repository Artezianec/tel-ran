import React from 'react';
import { store1 } from '../configureStore/store';

class Balance extends React.Component {
	componentDidMount() {
		this.unsubscripe = store1.subscribe(() => {
			this.forceUpdate()
		})
	}

	componentWillUnmount() {
		this.unsubscripe();
	}
	render() {
		return (
			<div>
				<h1>Bank</h1>
				<h3>Balance = {store1.getState().balance}</h3>
			</div>)
	}
}

export default Balance;