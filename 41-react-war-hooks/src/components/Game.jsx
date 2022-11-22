import React, {useEffect, useState} from 'react'
import {result} from '../App'
import {createDeck} from '../utils/constants'

let compDeck;
let playerDeck;
const Game = ({name, changeGlobalScore, changePage}) => {
	const [compCard, setCompCard] = useState('Computer card');
	const [playerCard, setPlayerCard] = useState('player card');
	const [playerRes, setPlayerRes] = useState(0);
	const [compRes, setCompRes] = useState(0);

	useEffect(() => {
		const deck = createDeck();
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		}
		compDeck = deck.slice(0, 26);
		playerDeck = deck.slice(26, 52);
		return () => {
			console.log('game unmounted');
		}
	},[])


	const handleClickNext = () => {
		if (compDeck.length) {
			const player = playerDeck.pop();
			const comp = compDeck.pop();
			if (player.rank < comp.rank) {
				setCompRes(prevCompRes => prevCompRes + 1);
			}
			if (player.rank > comp.rank) {
				setPlayerRes(prevPlayerRes => prevPlayerRes + 1);
			}
			setCompCard(`${comp.rank} ${comp.suit}`);
			setPlayerCard(`${player.rank} ${player.suit}`);
		} else {
			changeGlobalScore([compRes, playerRes]);
			changePage(result)
		}
	}

	return (
		<>
			<h2>Computer ({compRes})</h2>
			<p>{compCard}</p>
			<p>{playerCard}</p>
			<h2>{name} ({playerRes})</h2>
			<button onClick={handleClickNext}>Next</button>
		</>
	)

}

export default Game