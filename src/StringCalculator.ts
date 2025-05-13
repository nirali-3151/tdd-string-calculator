export const add = (numbers: string): number => {
    if (!numbers) {
        return 0;
    }
    let delimiter = /,|\n/;
    let nums = numbers;
    if (numbers.startsWith('//')) {
        const match = numbers.match(/^\/\/(\[.*?\])\n/);
        if (match) {
            delimiter = new RegExp(`[${match[1].slice(1, -1)}\n]`);
            nums = numbers.slice(match[0].length);
        } else {
            const singleCharMatch = numbers.match(/^\/\/(.)\n/);
            if (singleCharMatch) {
                delimiter = new RegExp(`[${singleCharMatch[1]}\n]`);
                nums = numbers.slice(4);
            }
        }
    }
    const numList = nums.split(delimiter).map(n => parseInt(n, 10));
    const negatives = numList.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return numList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}; 