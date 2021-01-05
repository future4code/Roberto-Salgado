function stringCompression(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let currentCount = 1;
        while (input[i + 1] === currentChar) {
            currentCount++;
            i++;
        }
        result += currentChar + currentCount;
    }
    return result.length > input.length ? input : result;
}
console.log(stringCompression("aabbb"));
console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("accurate"));
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"));
