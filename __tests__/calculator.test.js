import { divide } from "../src/calculator.js";

describe('divide', ()=>{
    it('divides 6 by 2', ()=>{
        expect(divide(6,2)).toBe(3);
    });

    it('throws when a is not number', ()=>{
        expect(()=>divide('6',2)).toThrow('Both arguments must be numbers');
    });

    it('throws when b is not number', ()=>{
        expect(()=>divide(6,'2')).toThrow('Both arguments must be numbers');
    });

    it('throws when a is NaN', ()=>{
        expect(()=>divide(NaN,2)).toThrow('Arguments cannot be NaN');
    });

    it('throws when a is NaN', ()=>{
        expect(()=>divide(6,NaN)).toThrow('Arguments cannot be NaN');
    });

    it('throws when b is 0', ()=>{
        expect(()=>divide(6,0)).toThrow('Division by zero is not allowed');
    });
})
