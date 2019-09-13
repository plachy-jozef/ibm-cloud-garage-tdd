const isPalindrome = phrase => {
	if (typeof phrase !== 'string') throw new Error('input must be string');
	if (phrase === '') throw new Error('empty string are not palindromes');
	if (phrase.trim() === '') return false;
	return phrase === phrase.split('').reverse().join('')
};

module.exports = { isPalindrome };
