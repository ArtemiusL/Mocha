mocha.setup('bdd');

const sum = (left, right) => left+right;

const equals = (expected, actual) => {
	if(expected !== actual) {
		throw new Error(`Ожидается: ${expected}, равный: ${actual}`)
	}
}

const notEquals = (expected, actual) => {
	if(expected === actual) {
		throw new Error(`Ожидается: ${expected}, не равный: ${actual}`)
	}
}

describe('Математика для 3-го класса', () => {
	it('Должны быть корректные данные', () => {
		equals(sum(2,2), 4);
		notEquals(sum(2,3), 4); 
	});
	it('Должны корректно складываться отрицательные числа', () => {
		equals(sum(-1, -1), -2);
		notEquals(sum(-1,-3), -3); 
	});
	it('Должны корректно складываться отрицательные и положительные числа', () => {
		equals(sum(-1, 2), 1);
	});
});

mocha.run();