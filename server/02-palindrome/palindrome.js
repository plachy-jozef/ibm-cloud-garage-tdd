const isPalindrome = phrase => {
	if (typeof phrase !== 'string') throw new Error('input must be string');
	if (phrase === '') throw new Error('empty string are not palindromes');
	if (phrase.trim() === '') return false;
	return phrase === phrase.split('').reverse().join('')
};

module.exports = { isPalindrome };


// var tmp = 'dude';
// tmp.split(''); // ?
// tmp.split('').reverse(); // ?
// const foo = tmp.split('').reverse().join('') // ?

// tmp = 'mom';
// tmp == tmp.split('').reverse().join('') // ?