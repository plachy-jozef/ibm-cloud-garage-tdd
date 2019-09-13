const { isPalindrome } = require('../palindrome.js');

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

	describe('palindrome', () => {
		it('true for mom', () => {
			expect(isPalindrome('mom')).toEqual(true);
		});
		it('false for dude', () => {
			expect(isPalindrome('dude')).toEqual(false);
		});
		it('false for dad mom', () => {
			expect(isPalindrome('mom data')).toEqual(false);
		});
		it('false for whitespace', () => {
			expect(isPalindrome('    ')).toEqual(false);
		});
		it('error for empty string', () => {
			expect(() => {
				isPalindrome('');
			}).toThrow('empty string are not palindromes');
		});
		it('error for not a string', () => {
			expect(() => {
				isPalindrome(112);
			}).toThrow('input must be string');
		});
	});
});