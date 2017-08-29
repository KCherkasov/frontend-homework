'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [0, 1, 2, 10, 100, 1000, 10000];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

  QUnit.test('дополнительный тест для format (вывод в 6 и 9 колонок)', function(assert) {
    const input = [-1, 0, 23, 12, 997, 2367, 432350, -22550, 1244, 0, 1, 2];

    const expected6 = '    -1      0   23 12 997 2367\n' +
                      '432350 -22550 1244  0   1    2';

    const expected9 = '-1 0 23 12 997 2367 432350 -22550 1244\n' +
                      ' 0 1  2';

    assert.strictEqual(format(input, 6), expected6);
    assert.strictEqual(format(input, 9), expected9);
  });

  QUnit.test('еще один дополнительный тест для format (8 чисел в 4, 8 и 10 колонок)', function(assert) {
    const input = [0, -123, 87659, 100000, 99999, 100500, 2305, 438];

    const expected4 = '    0   -123 87659 100000\n' +
                      '99999 100500  2305    438';

    const expected8and10 = '0 -123 87659 100000 99999 100500 2305 438';

    assert.strictEqual(format(input, 4), expected4);
    assert.strictEqual(format(input, 8), expected8and10);
    assert.strictEqual(format(input, 10), expected8and10);
  });
});
