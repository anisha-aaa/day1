function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

const sentence = "JavaScript is powerful";
console.log("Reversed Words:", reverseWords(sentence));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(" Without Duplicates:", removeDuplicates(numbers));
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const string = "Hello, JavaScript World!";
console.log(" Vowel Count:", countVowels(string));

