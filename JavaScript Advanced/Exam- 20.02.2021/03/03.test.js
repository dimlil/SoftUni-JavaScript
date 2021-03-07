const numberOperations = require('./numberOperations');
const {
    expect
} = require('chai');

describe('Tests', () => {
    describe('powNumber', () => {
        it('will work with 1', () => {
            expect(numberOperations.powNumber(1)).to.equal(1);
        });
        it('will work with 2', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
        // it('will not work with strings. should return NaN', () => {
        //     expect(powNumber('a')).to.NaN
        // });
    });
    describe('numberChecker', () => {
        it('will throw an error if intput is not a number', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw(Error, 'The input is not a number!');
        });
        it('will work with number under 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!')
        });
        it('will work with number equal 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        });
        it('will work with number greater 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')
        });
    });
    describe('sumArrays', () => {
        it('should return [2,2]', () => {
            expect(numberOperations.sumArrays([1, 1], [1, 1])).to.deep.equal([2, 2])
        });
        it('should return [2,2]', () => {
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1])).to.deep.equal([2, 2, 1])
        });
        it('should return [2,2]', () => {
            expect(numberOperations.sumArrays([1, 1], [1, 1, 1])).to.deep.equal([2, 2, 1])
        });
        it('wont work with strings', () => {
            expect(numberOperations.sumArrays(['a', 'a'], ['a', 'a'])).to.deep.equal(['aa', 'aa'])
        });
        it('wont work with strings', () => {
            expect(numberOperations.sumArrays(['a', 'a', 'a'], ['a', 'a'])).to.deep.equal(['aa', 'aa', 'a'])
        });
        it('wont work with strings', () => {
            expect(numberOperations.sumArrays(['a', 'a'], ['a', 'a', 'a'])).to.deep.equal(['aa', 'aa', 'a'])
        });
    });
});