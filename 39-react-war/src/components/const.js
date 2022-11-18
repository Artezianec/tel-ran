
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
];

export const createDeck = () => {
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { rank: values[x], suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}