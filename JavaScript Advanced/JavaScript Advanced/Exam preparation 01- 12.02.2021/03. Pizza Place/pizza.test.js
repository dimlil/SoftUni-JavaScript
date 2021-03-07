const {
    expect
} = require('chai');
const {
    getRemainingWork,
    makeAnOrder,
    orderType
} = require('./pizza.js');

describe('Tests', () => {
    describe('makeAnOrder', () => {
        it('should throw an error ', () => {
            expect(makeAnOrder({orderedDrink: 'the name of the drink'})).to.throw(/You must order at least 1 Pizza to finish the order./);
        });
    });
    describe('getRemainingWork', () => {
        it('', () => {

        });
    });
    describe('', () => {
        it('', () => {

        });
    });
});