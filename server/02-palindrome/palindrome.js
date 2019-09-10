const isPalindrome = (word) => word === word.split('').reverse().join('');

module.exports = { isPalindrome };


// var tmp = 'dude';
// tmp.split(''); // ?
// tmp.split('').reverse(); // ?
// const foo = tmp.split('').reverse().join('') // ?

// tmp = 'mom';
// tmp == tmp.split('').reverse().join('') // ?