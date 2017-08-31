 'use strict';

// функция преобразования исходных данных в строку заданной длины
// (с заполнением пробелами слева до требуемой длины)
const prependSpaces = (source, neededLength) => {
  let result = String(source);
  let lengthDiff = neededLength - result.length;
  return (lengthDiff <= 0) ? result : `${' '.repeat(lengthDiff)}${result}`;
}

// функция форматированного вывода массива чисел в cols колонок с выравниванием по правому краю
const format = (input, cols) => {
  // инициализируем и заполняем массив макс. ширин колонок
  let colsCharWidth = [].fill.call({length : cols}, 0);

  // ищем максимально длинную строку в каждом столбце
  for (let i = 0; i < input.length; ++i) {
    let itemLength = String(input[i]).length;
    let colIndex = i % cols;
    if (colsCharWidth[colIndex] < itemLength) {
      colsCharWidth[colIndex] = itemLength;
    }
  }

  // формируем выводимую строку
  return input.reduce((previousValue, currentValue, index, array) => {
           let colIndex = index % cols;
           return `${previousValue}${prependSpaces(currentValue, colsCharWidth[colIndex])}${(index + 1 === array.length) ? '' : (colIndex + 1 === cols) ? '\n' : ' '}`;
         }, '');
}
