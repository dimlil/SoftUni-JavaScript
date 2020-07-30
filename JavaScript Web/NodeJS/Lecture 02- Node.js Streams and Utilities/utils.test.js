const {print, calculate} = require('./utils.js');

describe('Test Utils.js Print void',()=>{
    it('should return hello',()=>{
        expect(print()).toBe('Hello')
    });
    it('should return 3',()=>{
        expect(calculate()).toBe(3)
    });
})