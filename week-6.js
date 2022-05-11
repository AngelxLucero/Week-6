//war card game project 

//full card deck (52 cards)
//2 players
//shuffle cards
//deal entire deck to both players, split evenly (26 cards each)
//play 1 card at a time against each other
//Whomever has the higher card wins, winner gets a point
//if tie happens, no one gets a point
//winner of the game is the one with the most points

//Creat the variables for a card
class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
    showCard(){
        return `${this.suit} ${this.value}`;
    }
}

// let c = new Card("clubs", 9);
// console.log(c.showCard());

     function createDeck(){
        var suits = ["♠", "♣", "♥", "♦"];
        var value = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
         Card_Value_Map = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        }
        var deck = []
    for(let suitCounter = 0; suitCounter < 4; suitCounter++){
        for(let valueCounter = 0; valueCounter < 13; valueCounter++){
            deck.push(value[valueCounter] + suits[suitCounter]);
            }
        }
        return deck;
    }

// if('J' > 'K'){
//     console.log('Jack wins!');
// }else{
//     console.log('King Wins!');
// }



//create a deck that contains 52 cards with numbers and suits

//Shuffle the deck
function shuffleDeck(deck){
for(var i=0; i <52; i++){
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
    }
}
var newDeck = createDeck();
shuffleDeck(newDeck);
console.log(newDeck);

// class Players{
//         constructor(playerOne, playerTwo){
//             this.playerOne = playerOne;
//             this.playerTwo = playerTwo;
//             this.points = 0
//         }
//     } 
//     const playerOne = new Players('Leela');
//     const playerTwo = new Players("Fry");


let firstPlayer = newDeck.splice(0,26);
let secondPlayer = newDeck.splice(0,26);
console.log(firstPlayer);
console.log(secondPlayer);

//plays one round 
// function(round){
// for(var i=0; i < 26; i++){
// let testOne = firstPlayer.pop();
// let testTwo = secondPlayer.pop();
// round[i] = 
//  }
// }
// console.log(testOne, testTwo);


// function PlayerHand(round){
// for(let i=0; i<26; i++){
//     let testOne = firstPlayer.pop();
//     let testTwo = secondPlayer.pop();
// for(let )    
//     }
// }



//Play War by throwing one card down at a time and giving points to the higher card. If tie no points are given.

// class WarGame {
//     constructor(){
//         this.Players = [];
//     }


//     var cardPlayed = [];
//     for(let firstPlayerCounter= 0; firstPlayerCounter < 26; firstPlayerCounter++){
//         for(let secondPlayerCounter = 0; secondPlayerCounter < 26; secondPlayerCounter++){
//             cardPlayed.push(firstPlayer[firstPlayerCounter] + secondPlayer[secondPlayerCounter]);
//         }
//     }console.log(cardPlayed);
// }

