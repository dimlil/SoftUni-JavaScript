const dealership = require('./03');
const {
    expect
} = require('chai')

describe('tests', () => {
    describe('euroCategory', () => {
        it('returns original price when model unsuported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });
        it('returns discounted price when model suported', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });
    });
    describe('carEquipment', () => {
        it('single element sigle pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });
        it('single element sigle pick', () => {
            expect(dealership.carEquipment(['a','b','c'], [1])).to.deep.equal(['b']);
        });
        it('single element sigle pick', () => {
            expect(dealership.carEquipment(['a','b','c'], [0,2])).to.deep.equal(['a','c']);
        });
    });
    describe('newCarCost', () => {
        it('category below threshold', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
        it('category above threshold', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        });
        it('category above threshold', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        });
    });
})