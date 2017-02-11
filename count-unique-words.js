//Goal: Function takes in a string composed of words, and outputs an integer representing the largest number of repeated words in the string.

function numUniqueWords(phrase) {
  const wordsArray = phrase.split(' ');
  let count = {};
  let uniqueWordCount = 0;
  wordsArray.forEach(function(word) {
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
    if (count[word] > uniqueWordCount) {
      uniqueWordCount = count[word];
    }
  });
  return uniqueWordCount;
}

console.log(numUniqueWords("hello world hello"));
