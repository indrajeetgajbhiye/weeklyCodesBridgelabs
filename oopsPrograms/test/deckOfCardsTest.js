let assert = require("chai").assert;
var deck = require('../deckOfCardsQueue');
var deckCards = deck.main();
describe("main()", function(){
    it("main is boolean", function(){
        assert.isBoolean(deckCards);
    })
    it("main is ok", function(){
        assert.isOk(deckCards);
    })
    it("main is not null", function(){
        assert.isNotNull(deckCards);
    })
})