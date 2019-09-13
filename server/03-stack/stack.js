/** 
 * Prime Number = prvocislo
 * 2, 3, 5, 7, 11, 13, 17, 19, ...
 */
const findePrimeFactors = (n) => {
	if (n === 1) return [];
	return [n];
}

module.exports = { findePrimeFactors };