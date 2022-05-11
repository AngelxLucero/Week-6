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
//example of what a card would look like
// let c = new Card("clubs", 9);
// console.log(c.showCard());

//create a deck that contains 52 cards with numbers and suits and
//their values.

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

//test if the value of the card is recognized
// if('J' > 'K'){
//     console.log('Jack wins!');
// }else{
//     console.log('King Wins!');
// }


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
console.log('Here is the shuffled deck: ' + newDeck);


//deal the deck of shuffled cards to two players

let Leela = newDeck.splice(0,26);
let Fry = newDeck.splice(0,26);
console.log(`Leela's hand: ` + Leela);
console.log(`Fry's hand: ` + Fry);

//Play the game of War and give a point to the player that has the higher card
//if result is a tie no one gets a pont. Print the results of the Winner.

let herScore = 0;
let hisScore = 0;
for(i=0; i <= 25; i++){
    if(Leela[i] > Fry[i]){
        console.log(`Leela: ${Leela[i]} Fry: ${Fry[i]} Leela wins!`);
        herScore +=1;
    }else if(Leela[i] < Fry[i]){
            console.log(`Leela: ${Leela[i]} Fry: ${Fry[i]} Fry wins!` )
            hisScore +=1;
    }
    else if(Leela[i] === Fry[i]){
        console.log(`Leela: ${Leela[i]} Fry: ${Fry[i]} Tie` )
        hisScore += 0; herScore +=0;
    }
    console.log(herScore, hisScore)
 }
if(herScore > hisScore){
    console.log(`Leela wins! ${herScore} to ${hisScore}`);
}else if(herScore < hisScore){
    console.log(`Fry wins! ${herScore} to ${hisScore}`);
}else{
    console.log(`No one wins as it is a Tie`);
}

