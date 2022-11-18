import React, { Component } from 'react'
import { createDeck, page_result } from '../const/const';

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            points: [0, 0],
            compCard: 'Computer Cards',
            playerCard: 'Player Cards',
            res: 0
        }
         this.deck = createDeck();
    }

    handleClickNext = () => {
        if (this.deck.length) {
            const playerCard = this.deck.pop();
            const compCard = this.deck.pop();
            const points = [...this.state.points];
            if (playerCard.Value < compCard.Value) {
                points[0]++;
                this.setState({ res: 1 })
            }
            if (playerCard.Value > compCard.Value) {
                points[1]++
                this.setState({ res: 0 })
            }
            if (playerCard.Value === compCard.Value) {
                this.setState({ res: -1 })
            }
            this.setState({
                points,
                compCard: `${compCard.Value}  ${compCard.Suit}`,
                playerCard: `${playerCard.Value}  ${playerCard.Suit}`
            })
        } else {
            this.props.changePoints(this.state.res)
            this.props.switchPage(page_result);
        }
    }

    render() {
        return (
            <div className='App'>
                <h2>Computer({this.state.points[0]})</h2>
                <p>{this.state.compCard}</p>
                <p>{this.state.playerCard}</p>
                <h2>{this.props.name}({this.state.points[1]})</h2>
                <button onClick={this.handleClickNext} >Next</button>
            </div>
        )
    }
}
