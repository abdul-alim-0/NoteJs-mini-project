// 1) Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

// 2) Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3) Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);  // slice() to avoid mutating the original array
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;  // Handle empty string case
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to count vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Function to find the average of numbers in an array
function findAverage(arr) {
    if (arr.length === 0) return 0;  // Avoid division by zero
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Test the functions
console.log(calculateDifference(10, 5));         // Output: 5
console.log(isOdd(3));                           // Output: true
console.log(findMin([10, 5, 20, 3]));            // Output: 3
console.log(filterEvenNumbers([1, 2, 3, 4]));    // Output: [2, 4]
console.log(sortArrayDescending([10, 20, 5]));   // Output: [20, 10, 5]
console.log(lowercaseFirstLetter("ALIM"));      // Output: aLIM
console.log(countVowels("Ostad - Learn Skills Live"));         // Output: 7
console.log(findAverage([1, 2, 3, 4, 5]));       // Output: 3