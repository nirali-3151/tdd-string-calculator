export const add = (numbers: string): number => {
    if (!numbers) {
        return 0;
    }

    return numbers
    .split(/,|\n/)
    .reduce((sum: number, n: string) => sum + parseInt(n), 0);
}; 