export const createDeck = () => {
    const deck = [];
    const suits = ['club', 'diamond', 'heart', 'spade'];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            deck.push({ rank: j, suit: suits[i] })
        }
    }
    return deck;
}