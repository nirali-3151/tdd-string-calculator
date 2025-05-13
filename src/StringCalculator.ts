export const add = (numbers: string): number => {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/;
    let nums = numbers;
    if (numbers.startsWith('//')) {
        const match = numbers.match(/^\/\/(.)\n/);
        if (match) {
            delimiter = new RegExp(`[${match[1]}\n]`);
            nums = numbers.slice(4);
        }
    }
    return nums
        .split(delimiter)
        .reduce((sum: number, n: string) => sum + parseInt(n, 10), 0);
}; 