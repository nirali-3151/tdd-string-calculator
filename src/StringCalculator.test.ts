import { add } from './StringCalculator';

describe('String Calculator', () => {
    describe('add', () => {

        it('should return 0 for empty string', () => {
            expect(add('')).toBe(0);
        });

        it('should return the number itself for single number input', () => {
            expect(add('1')).toBe(1);
        });

        it('should return the sum of two numbers separated by a comma', () => {
            expect(add('1,2')).toBe(3);
        });
        
    });
}); 