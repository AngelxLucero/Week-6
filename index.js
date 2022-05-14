// function doSomething(x, y){
//     if(typeof x != "string"){
//         throw new Error("x must be a string");
//     }
//     return x + y;
// }

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
var completeDeck = createDeck();
console.log(`Here is the complete Deck of Cards: ${completeDeck}`);