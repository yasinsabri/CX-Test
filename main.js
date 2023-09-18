/** @format */

//  ================= Q#1 =======================

const handleSortDescending = arr => {
  return arr.sort((a, b) => b - a);
};

const inputArray = [3, 2, 7, 4, 6, 9];
const sortedArray = handleSortDescending(inputArray);

// result
console.log(sortedArray); // Output: [9, 7, 6, 4, 3, 2]

//  ================= Q#2 =======================

const handleCheckPalindrome = str => {
  str = str.replace(/\s/g, "").toLowerCase();

  return str === str.split("").reverse().join("");
};

// result
console.log(handleCheckPalindrome("madam")); // Output: true
console.log(handleCheckPalindrome("doctor")); // Output: false

//  ================= Q#3 =======================

const handleSumOfTwoLargest = arr => {
  arr.sort((a, b) => b - a);

  return arr[0] + arr[1];
};

const inputArr = [2, 3, 5, 8, 22, 18];
const result = handleSumOfTwoLargest(inputArr);

// result
console.log(result); // Output: 40

//  ================= Q#4 =======================

const handleFindMissingNumbers = arr => {
  const highestEntry = Math.max(...arr);
  const missingNumbers = [];

  for (let i = 0; i <= highestEntry; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};

const inputNumArr = [3, 4, 9, 1, 7, 3, 2, 6];
const missingNumbers = handleFindMissingNumbers(inputNumArr);

// result
console.log(missingNumbers); // Output: [0, 5, 8]

//  ================= Q#5 =======================

const handleFindMostRepeatedNumber = arr => {
  let mostRepeatedNum;
  let maxCount = 0;

  for (const num of arr) {
    const count = arr.filter(item => item === num).length;
    if (count > maxCount) {
      maxCount = count;
      mostRepeatedNum = num;
    }
  }

  return `${mostRepeatedNum} is repeated ${maxCount} times`;
};

const inputCountArray = [
  4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5,
];
const countResult = handleFindMostRepeatedNumber(inputCountArray);

// result
console.log(countResult); // Output: "4 is repeated 5 times"

//  ================= Q#6 =======================

const handleRotateArray = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const lastElement = arr.pop();
  arr.unshift(lastElement);

  return arr;
};

const inputRotateArray = [3, 8, 9, 7, 6];
const rotatedArray = handleRotateArray(inputRotateArray);

// result
console.log(rotatedArray); // Output: [6, 3, 8, 9, 7]
