export const add = (numbers: string): number => {
    if (!numbers) {
        return 0;
    }
    if (numbers.includes(',')) {
        return numbers.split(',').reduce((sum, n) => sum + parseInt(n, 10), 0);
    }
    return parseInt(numbers);
}; 