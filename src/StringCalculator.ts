export const add = (numbers: string): number => {
    if (!numbers) {
        return 0;
    }
    let delimiter = /,|\n/;
    let nums = numbers;
    if (numbers.startsWith('//')) {
        const multiDelimMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
        if (multiDelimMatch) {
            const delims = multiDelimMatch[0]
                .slice(2, -1)
                .split('][')
                .map(d => d.replace(/[[\]\\^$.|?*+(){}]/g, '\$&')); // escape regex chars
            delimiter = new RegExp(delims.concat('\\n').join('|'));
            nums = numbers.slice(multiDelimMatch[0].length);
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