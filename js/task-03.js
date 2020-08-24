// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  let words = string.split(' ');
  let item = 0;
  let elem = '';
  for (const element of words) {
    if (item < element.length) {
      item = element.length;
      elem = element;
    }
  }
  return elem;
};

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

const findSmallesWord = function (string) {
  let smallestWord = string.split(' ')[0];

  for (const item of string.split(' ')) {
    if (item.length < smallestWord.length) {
      smallestWord = item;
    }
  }
  return smallestWord;
};

//console.log(findSmallesWord('Google do a roll'));
