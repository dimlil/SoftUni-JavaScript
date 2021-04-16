// const { expect } = require('chai');
const {expect} = require('chai');
const stringOperations = require('./03. String Operations');

describe('Tests', () => {
    describe('String slicer', () => {
        it('String slicer should work with one string with 4 charactest', () => {
            expect(stringOperations.stringSlicer('abcd')).to.equal('abc...');
        });
        it('String slicer should work with one string with 3 charactest', () => {
            expect(stringOperations.stringSlicer('abc')).to.equal('abc...');
        });
        it('String slicer should work with one string with 1 charactest', () => {
            expect(stringOperations.stringSlicer('a')).to.equal('a...');
        });
        it('String slicer should work with one string with 0 charactest', () => {
            expect(stringOperations.stringSlicer("")).to.equal('...');
        });
    });
    describe('Word checker', () => {
        it('Word checker should trim and return word', () => {
            expect(stringOperations.wordChecker('abc ', 'abc dasfa asf')).to.equal('abc');
        });
        it('Word checker should trim and return word not found', () => {
            expect(stringOperations.wordChecker('words', 'bac')).to.equal('words not found!');
        });
        it('Word checker should work with lower and capital cases', () => {
            expect(stringOperations.wordChecker('AbC', 'ABc')).to.equal('abc');
        });
    });
    describe('Print every Nth element', () => {
        it('Print every Nth element should not work if first param is not a number', () => {
            expect(() => stringOperations.printEveryNthElement('abc ', ['a', 'b'])).to.throw(Error, 'The input is not valid!')
        });
        it('Print every Nth element should not work if second param is not a array', () => {
            expect(() => stringOperations.printEveryNthElement('123 ', "abc")).to.throw(Error, 'The input is not valid!')
        });
        it('Print every Nth element should work with right input', () => {
            expect(stringOperations.printEveryNthElement(2, [1,2,3,4,5,6])).to.deep.equal([1,3,5]);
        });
    });
});
