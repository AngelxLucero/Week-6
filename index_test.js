var expect = chai.expect;

describe("MyFunctions", function(){
    describe("#createDeck", function() {
        it('should concatenate the two parameters',function() {
            var x = createDeck(2,3,4,5,6,7,8,9,10,'J','Q','K','A', "♠", "♣", "♥", "♦");
            expect(x).to.equal(`2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠,A♠,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,A♣,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,A♥,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,A♦`);
        });

        it('should throw an error if first parameter is not a string', function(){
            expect(function(){
                createDeck(`2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠,A♠,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,A♣,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,A♥,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,A♦`);
            }).to.throw(Error);
        });
    });
});     