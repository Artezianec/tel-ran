import React from 'react'
import { createDeck } from '../param/constants';
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.deck = createDeck();
        this.compCard = [];
        this.playerCard = [];
        this.state = {
            inputname: '',
            name: '',
            compPoint: 0,
            playerPoint: 0,
            compDack: '',
            playerDack: ''
        }
    }

    gameClick = () => {
        for (let i = 0; i < 26; i++) {
            this.compCard[i] = this.deck[i]
            for (let j = this.deck.length; j > 26; j--) {
                this.playerCard[j] = this.deck[j]
            }
        }
    }


    render() {
        if (!this.state.name) {
            return (
                <div>
                    <h1>Ready for war</h1>
                    <input type='text' onChange={(e) => this.setState({ inputname: e.target.value })} value={this.state.inputname} placeholder='Enter your name' />
                    <button onClick={() => { this.setState({ name: this.state.inputname }) }}>Start</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Name: {this.state.name}, Points: {this.state.playerPoint}</h1>
                    <h2>Player cards: {this.state.playerDack}</h2>
                    <h2>Computer points: {this.state.compPoint}</h2>
                    <h2>Computer Cards: {this.state.compDack}</h2>
                    <button onClick={this.gameClick()}>game</button>
                </div>
            );
        }
    }
}
export default LoginPage