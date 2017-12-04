mocha.setup('bdd');

const sum = (left, right) => left+right;
const assert = (truth) => {
	if(!truth) {
		throw new Error(`Ожидается что будет true: ${truth} == true`)
	}
}

describe('Математика для 3-го класса', () => {
	it('Должны быть корректные данные', () => {
		assert(sum(2,2) === 4); 
	});
	it('Должны корректно складываться отрицательные числа', () => {
		assert(sum(-1, -1) === -2);
	});
	it('Должны корректно складываться отрицательные и положительные числа', () => {
		assert(sum(-1, 2) === 1);
	});
});

mocha.run();