'use strict';

// функция преобразования исходных данных в строку заданной длины
// (с заполнением пробелами слева до требуемой длины)
const prepend_spaces = function(source, needed_length) {
  let result = String(source);
  while (result.length < needed_length) {
    result = ' ' + result;
  }
  return result;
}

// функция форматированного вывода массива чисел в cols колонок с выравниванием по правому краю
const format = function(input, cols) {
  // инициализируем и заполняем массив макс. ширин колонок
  let cols_char_width = [];
  for (let i = 0; i < cols; ++i) {
    cols_char_width.push(0);
  }

  // ищем максимально длинную строку в каждом столбце
  for (let i = 0; i < input.length; ++i) {
    let item_length = String(input[i]).length;
    if (cols_char_width[i % cols] < item_length) {
      cols_char_width[i % cols] = item_length;
    }
  }

  // формируем выводимую строку
  let output = new String('');
  for (let i = 0; i < input.length; ++i) {
    output += prepend_spaces(input[i], cols_char_width[i % cols]) + ((i + 1 == input.length) ? '' : (i % cols + 1 == cols) ? '\n' : ' ');
  }
  return output;
}
