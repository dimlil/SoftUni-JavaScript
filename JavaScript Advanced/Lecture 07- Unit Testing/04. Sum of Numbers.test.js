const sum = require('./04. Sum of Numbers');
const { expect } = require('chai');

describe('Sum Numbers', () => {
    it('sum single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sum multiple numbers', () => {
        expect(sum([1,1])).to.equal(2);
    });
    it('sum different numbers', () => {
        expect(sum([2,3,4])).to.equal(9);
    });
});