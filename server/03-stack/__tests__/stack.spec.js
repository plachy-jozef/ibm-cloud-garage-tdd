const { findePrimeFactors } = require('../stack');

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  it('starts empty', () => {
		expect(findePrimeFactors(1)).toEqual([]);
	});
	it('return none for 1', () => {
		expect(findePrimeFactors(1)).toEqual([]);
	});
	it('return 2 for 2', () => {
		expect(findePrimeFactors(2)).toEqual([2]);
	});
	it.todo('return 3 for 3');
	it.todo('return 2, 2 for 4');
	it.todo('return 5 for 5');
	it.todo('return 2, 3 for 6');
	it.todo('return 7 for 7');
	it.todo('return 2, 2, 2 for 8');
	it.todo('return 3, 3 for 9');

  it.todo('starts with stack size of 0');
  it.todo('is not empty when pushed');
  it.todo('stack size is 1 when pushed');
  it.todo('stack is empty when pushed and popped');
  it.todo('stack size is 0 when pushed and popped');
  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});