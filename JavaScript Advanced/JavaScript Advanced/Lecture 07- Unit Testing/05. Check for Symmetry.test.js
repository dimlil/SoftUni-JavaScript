const { isSymmetric } = require('./05. Check for Symmetry.js');
const { expect } = require('chai');

describe('isSimmetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.true;
    });
    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1,2])).to.false;
    });
    it('returns false for invalid argumrnt', () => {
        expect(isSymmetric('a')).to.false;
    });

    it('returns true for valid symmetric odd elements array', () => {
        expect(isSymmetric([1,1,1])).to.true;
    });
    it('returns true for valid symmetric string input', () => {
        expect(isSymmetric(['a','a'])).to.true;
    });
    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a','b'])).to.false;
    });
    it('returns false for type coerced elements', () => {
        expect(isSymmetric([1,"1"])).to.false;
    });
})