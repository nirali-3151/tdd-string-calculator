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

    const splitNumber = nums.split(delimiter)
    const checkCharacter = splitNumber.filter((n) => isNaN(parseInt(n)) && n !== '');
    
    if (checkCharacter.length > 0) {
        throw new Error(`${checkCharacter.join(', ')} is not a valid number`);
    }
    
    const numList = nums.split(delimiter).map(n => parseInt(n, 10));
    const negatives = numList.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return numList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}; 

// add(''); // returns 0
// add('1,2'); // returns 3    
// add('1\n2,3'); // returns 6
// add('//;\n1;2'); // returns 3   
// add('//[***]\n1***2***3'); // returns 6
// add('//[*][%]\n1*2%3'); // returns 6
// add('//[***][%%%]\n1***2%%%3'); // returns 6
// add('//[***][%%%]\n1***2%%%3,4'); // returns 10
// add('//[***][%%%]\n1***2%%%3,4,1001'); // returns 10
// add('//[***][%%%]\n1***2%%%3,-4'); // throws Error: negative numbers not allowed: -4
// add('//[***][%%%]\n1***2%%%3,4,-5'); // throws Error: negative numbers not allowed: -5
// add('//[***][%%%]\n1***2%%%3,4,1000'); // returns 1010
// add('//[***][%%%][,]\n1***2%%%3,4,1000,1001'); // returns 1010
// add('12,rt,34,35,v,3') // returns 'rt, v is not a valid number'