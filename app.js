// task 1

// function getNumber(num) {
//   if (num % 2 === 0) {
//     console.log("Even number");
//   } else console.log("Odd number");
// }

// getNumber(3);

// const getNumber = function (num) {
//   if (num === 0) {
//     console.log(`${num} is 0`);
//   } else if (num % 2 === 0) {
//     console.log(`${num} is a even number`);
//   } else {
//     console.log(`${num} is a odd number`);
//   }
// };

// getNumber(0);

// const getNumber = (num) => {
//   if (num === 0) {
//     console.log(`${num} is 0`);
//   } else if (num % 2 === 0) {
//     console.log(`${num} is a even number`);
//   } else {
//     console.log(`${num} is a odd number`);
//   }
// };

// getNumber(0);

// task 2

// const reverseNumber = function (num) {
//   let remainder,
//     reverse = 0;
//   while (num > 0) {
//     remainder = num % 10;
//     reverse = reverse * 10 + remainder;
//     num = parseInt(num / 10);
//   }
//   console.log(reverse);
// };

// reverseNumber(23434);

// task 3

// const countLetter = (text, letter) => {
//   let count = 0;
//   for (let i = 1; i <= text.length; i++) {
//     if (text[i] == letter) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countLetter("wood", "o"));

// task 4

// function powerRaise(n, a) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= a;
//   }
//   return result;
// }

// console.log(powerRaise(2, 4));

// task 5

// const findBiggestNum = function (num) {
//   let str = String(num);
//   let maxDigit = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > maxDigit) {
//       maxDigit = str[i];
//     }
//   }
//   return maxDigit;
// };

// console.log(findBiggestNum(1234839));

// task 6

// const repeatWords = (text, n) => {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     result += text;
//     result += "\n";
//   }
//   return result;
// };

// console.log(repeatWords("jello", 3));

// task 7

// function isPalindrome(text) {
//   let j = text.length - 1;
//   for (let i = 0; i < text.length / 2; i++) {
//     if (text[i] !== text[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// console.log(isPalindrome("nihin"));

// task 8

// const SumOfDigits = function (num) {
//   let sum = 0;
//   let remainder = 0;
//   while (num > 0) {
//     remainder = num % 10;
//     sum += remainder;
//     num = parseInt(num / 10);
//   }
//   return sum;
// };

// console.log(SumOfDigits(123));

// task 9

// const countVovel = (text) => {
//   let count = 0;
//   let vowels = "aeiuoAEUIO";
//   for (let char of text) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVovel("magazine"));

// task 10

// function NumberOfLetters(text) {
//   let result = { uppercase: 0, lowercase: 0 };
//   for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (char >= "A" && char <= "Z") {
//       result.uppercase++;
//     } else if (char >= "a" && char <= "z") {
//       result.lowercase++;
//     }
//   }

//   return result;
// }

// console.log(NumberOfLetters("InnOvaICEtioN"));

// task 11

// const getNumber = function (n) {
//   let str = String(n);
//   const sortedStr = str.split("").sort().join("");
//   for (let i = 0; i < sortedStr.length; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//   }
// };

// console.log(getNumber(4321));

// task 12

// const generatePassword = (length) => {
//   const chars = {
//     letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     numbers: "0123456789",
//     symbols: "!@#$%^&*()_+[]{}|;:,.<>?/",
//   };

//   let password = "";

//   for (let i = 0; i < length; i++) {
//     const charType = Math.floor(Math.random() * 3);

//     switch (charType) {
//       case 0:
//         password +=
//           chars.letters[Math.floor(Math.random() * chars.letters.length)];
//         break;
//       case 1:
//         password +=
//           chars.numbers[Math.floor(Math.random() * chars.numbers.length)];
//         break;
//       case 2:
//         password +=
//           chars.symbols[Math.floor(Math.random() * chars.symbols.length)];
//         break;
//     }
//   }

//   return password;
// };

// console.log(generatePassword(12));

// task 13

// function convertCurrency(amount, currency) {
//   let convertedAmount;

//   switch (currency.toUpperCase()) {
//     case "USD":
//       convertedAmount = amount * 1.1;
//       break;
//     case "EUR":
//       convertedAmount = amount * 0.9;
//       break;
//     case "RUB":
//       convertedAmount = amount * 80;
//       break;
//     default:
//       return "Unsupported currency!";
//   }

//   return `${convertedAmount.toFixed(2)} ${currency.toUpperCase()}`;
// }

// console.log(convertCurrency(100, "USD")); // Output: "110.00 USD"

// task 14

// const formatTime = function (seconds) {
//   if (seconds < 0) {
//     return "Invalid input";
//   }

//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;

//   let formattedMinutes = "";
//   let formattedSeconds = "";

//   if (minutes < 10) {
//     formattedMinutes = "0" + minutes;
//   } else {
//     formattedMinutes = String(minutes);
//   }

//   if (remainingSeconds < 10) {
//     formattedSeconds = "0" + remainingSeconds;
//   } else {
//     formattedSeconds = String(remainingSeconds);
//   }

//   return formattedMinutes + ":" + formattedSeconds;
// };

// console.log(formatTime(75));

// task 15

// const hideCardNumber = (card_number) => {
//   let str = String(card_number);
//   if (str.length <= 4) {
//     return str;
//   }

//   let hiddenPart = "*".repeat(str.length - 4);
//   let visiblePart = str.slice(-4);
//   return hiddenPart + visiblePart;
// };

// console.log(hideCardNumber(1234567812345678));

// task 16

// function mostCommonLetter(text) {
//   if (!text) {
//     return "The text is empty!";
//   }

//   let letterCounts = {};
//   let maxCount = 0;
//   let mostUsedLetter = "";

//   for (let char of text.toLowerCase()) {
//     if (char >= "a" && char <= "z") {
//       letterCounts[char] = (letterCounts[char] || 0) + 1;

//       if (letterCounts[char] > maxCount) {
//         maxCount = letterCounts[char];
//         mostUsedLetter = char;
//       }
//     }
//   }

//   return `The most used letter is "${mostUsedLetter}" with ${maxCount} counts.`;
// }

// console.log(mostCommonLetter("Hello world"));

// task 17

// const toRomanNumeral = function (num) {
//   const romanNumerals = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   let result = "";

//   for (let key in romanNumerals) {
//     while (num >= romanNumerals[key]) {
//       result += key;
//       num -= romanNumerals[key];
//     }
//   }

//   return result;
// };

// console.log(toRomanNumeral(1987));

// task 18

// const calculate = (expression) => {
//   const [num1, operator, num2] = expression.split(" ");
//   const a = parseFloat(num1);
//   const b = parseFloat(num2);

//   if (isNaN(a) || isNaN(b)) {
//     return "Invalid numbers in the expression.";
//   }

//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "Invalid operator. Use +, -, *, or /.";
//   }
// };

// console.log(calculate("2 + 3"));

// task 19

// function groupArrayElements(array, size) {
//   let groupedArray = [];

//   for (let i = 0; i < array.length; i += size) {
//     let group = array.slice(i, i + size);
//     groupedArray.push(group);
//   }

//   return groupedArray;
// }

// console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// task 20

const sortWordsByLength = function (text) {
  let words = text.split(" ");
  words.sort((a, b) => a.length - b.length);

  return words;
};

console.log(sortWordsByLength("lorem ipsum dad dfe adfjsdkf dkfjsdl"));
