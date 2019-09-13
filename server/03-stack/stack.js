/** 
 * Prime Number = prvocislo
 * 2, 3, 5, 7, 11, 13, 17, 19, ...
 */
const findePrimeFactors = (n) => {
	const factors = [];
	if (n > 1) {
		while (n % 2 === 0) {
			factors.push(2);
			n /= 2;
		}
		if (n > 1) factors.push(n);
	}
	return factors;
}

module.exports = { findePrimeFactors };