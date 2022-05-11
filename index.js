//function doSomething(x, y){
//     if(typeof x != "string"){
//         throw new Error("x must be a string");
//     }
//     return x + y;
// }

//Class declares an unshuffled default deck of playing cards - Begin
//Create a card 
class Card {
    constructor(suit, rank, value) { //properties will make up each individual card
        this.suit = suit; //will construct suit of an individual instance of card
        this.rank = rank; //will construct rank of an individual instance of card
        this.value = value; //will construct rank of an individual instance of card

    }
}

//card variables to construct
let suits = ['hearts', 'diamonds', 'clubs', 'spades']; //need to iterate through suites
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']; //need to iterate through ranks
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // giving value to string cards


//create a deck variable
class Deck {
    constructor() {
        this.deck = []; //cards store here with rank, suit and value 
    }
    createDeck(){
        for(let suitCounter = 0; suitCounter < suits.length; suitCounter++) { //iterate through suits
            for(let rankCounter = 0; rankCounter < ranks.length; rankCounter++) { //iterate through ranks
                this.deck.push(new Card(suits[suitCounter], ranks[rankCounter], values[rankCounter])) // gives suit, rank and value to the the Card class
            }
        }
    }
    shuffleDeck(){
        //mix deck

    }
    dealDeck(){
        //deal 26 cards to each player

    }
}

let deck = new Deck(); //creates a new instance of the deck class
deck.createDeck(suits, ranks, values); //calls the create deck function
console.log(deck) // prints a deck of 52 cards


//Create a player class
class Player {
    constructor(player) {
        this.player = player; //pass in player(s)
        this.playerHand = []; //push 26 cards to each player
        this. points = 0; //starting score is zero
    }
}

//Create instance of Player class
let playerOne = new Player('Kristina'); //instance of Player class
let playerTwo = new Player('Computer') //another instance of Player class
console.log(playerOne, playerTwo) // this works!