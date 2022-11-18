import React from 'react'
import { createDeck } from './const'
import { result } from '../App'

class Game extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            compCard: 'Computer card',
            playerCard: 'Player card',
            playerRes: 0,
            compRes: 0,
        }

    }
    componentDidMount() {
        const deck = createDeck();
        deck.sort((a,b) => Math.random() - 0.5);
        this.compDeck = deck.slice(0, 26);
        this.playerDeck = deck.slice(26, 52);
    }

    componentWillUnmount() {
        console.log("Game unmounted");
    }

    handleClickNext = () => {
        if (this.compDeck.length) {
            const playerCard = this.playerDeck.pop();
            const compCard = this.compDeck.pop();
            if (playerCard.rank < compCard.rank) {
                this.setState((prevState, props) => ({ compRes: prevState.compRes + 1 }));
            }
            if (playerCard.rank > compCard.rank) {
                this.setState((prevState, props) => ({ playerRes: prevState.playerRes + 1 }));
            }
            this.setState({
                compCard: `${compCard.rank} ${compCard.suit}`,
                playerCard: `${playerCard.rank} ${playerCard.suit}`
            })
        } else {
            this.props.changeGlobalScore([this.state.compRes, this.state.playerRes]);
            this.props.changePage(result)
        }
    }

    render() {
        return (
            <>
                <h2>Computer ({this.state.compRes})</h2>
                <p>{this.state.compCard}</p>
                <p>{this.state.playerCard}</p>
                <h2>{this.props.name} ({this.state.playerRes})</h2>
                <button onClick={this.handleClickNext}>Next</button>
            </>
        )
    }

}

export default Game