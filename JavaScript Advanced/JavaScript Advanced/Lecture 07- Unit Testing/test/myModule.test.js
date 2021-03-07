const { sum } = require('./myModule');
const { expect } = require('chai');

describe('Sum funtion', () => {
    it('works wtih Numbers', () => {
        expect(sum(1, 2)).to.equal(3);
    });
    it('works wtih Numbers аs strings', () => {
        expect(sum("1", "2")).to.equal(3);
    });
    it('return NaN with strings', () => {
        expect(sum("a", "b")).to.be.NaN;
    });

});