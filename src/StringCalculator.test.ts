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

        it('should return the sum of an unknown amount of numbers', () => {
            expect(add('1,2,3')).toBe(6);
            expect(add('4,5,6,7')).toBe(22);
        });

        it('should handle new lines between numbers', () => {
            expect(add('1\n2,3')).toBe(6);
            expect(add('4\n5\n6')).toBe(15);
        });
    });
}); 