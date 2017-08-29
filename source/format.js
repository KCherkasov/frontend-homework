'use strict';

// функция преобразования исходных данных в строку заданной длины
// (с заполнением пробелами слева до требуемой длины)
const prepend_spaces = (source, needed_length) => {
  let result = String(source);
  let length_diff = needed_length - result.length;
  return (length_diff <= 0) ? result : ' '.repeat(length_diff).concat(result);
}

// функция форматированного вывода массива чисел в cols колонок с выравниванием по правому краю
const format = (input, cols) => {
  // инициализируем и заполняем массив макс. ширин колонок
  let cols_char_width = [].fill.call({length : cols}, 0);

  // ищем максимально длинную строку в каждом столбце
  for (let i = 0; i < input.length; ++i) {
    let item_length = String(input[i]).length;
    let col_index = i % cols;
    if (cols_char_width[col_index] < item_length) {
      cols_char_width[col_index] = item_length;
    }
  }

  // формируем выводимую строку
  let output = new String('');
  for (let i = 0; i < input.length; ++i) {
    let col_index = i % cols;
    output += prepend_spaces(input[i], cols_char_width[col_index]) + ((i + 1 === input.length) ? '' : (col_index + 1 === cols) ? '\n' : ' ');
  }
  return output;
}
