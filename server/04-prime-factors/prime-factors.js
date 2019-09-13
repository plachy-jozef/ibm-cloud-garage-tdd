/** 
 * Prime Number = prvocislo
 * 2, 3, 5, 7, 11, 13, 17, 19, ...
 */
const findePrimeFactors = (n) => {
	const factors = [];
	if (n > 1) {
		for (let divisor = 2; n > 1; divisor += 1) {
			for (; n % divisor === 0; n /= divisor) factors.push(divisor);
		}
	}
	return factors;
}

module.exports = { findePrimeFactors };