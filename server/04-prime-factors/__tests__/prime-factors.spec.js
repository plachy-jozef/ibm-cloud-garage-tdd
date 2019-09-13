const { findePrimeFactors } = require('../prime-factors.js');

describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a prime factors function should', () => {
  it('starts empty', () => {
		expect(findePrimeFactors(1)).toEqual([]);
	});
	it('return none for 1', () => {
		expect(findePrimeFactors(1)).toEqual([]);
	});
	it('return 2 for 2', () => {
		expect(findePrimeFactors(2)).toEqual([2]);
	});
	it('return 3 for 3', () => {
		expect(findePrimeFactors(3)).toEqual([3]);
	});
	it('return 2, 2 for 4', () => {
		expect(findePrimeFactors(4)).toEqual([2, 2]);
	});
	it('return 5 for 5', () => {
		expect(findePrimeFactors(5)).toEqual([5]);
	});
	it('return 2, 3 for 6', () => {
		expect(findePrimeFactors(6)).toEqual([2, 3]);
	});
	it('return 7 for 7', () => {
		expect(findePrimeFactors(7)).toEqual([7]);
	});
	it('return 2, 2, 2 for 8', () => {
		expect(findePrimeFactors(8)).toEqual([2, 2, 2]);
	});
	it('return 3, 3 for 9', () => {
		expect(findePrimeFactors(9)).toEqual([3, 3]);
	});
});