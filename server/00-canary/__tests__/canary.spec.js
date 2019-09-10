let fahrenheit2celsius = (fahr) => (fahr - 32) * 5/9;

describe('the canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

	describe('fahrenheit2celsius', () => {
		it ('fahrenheit2celsius of 32 is 0', () => {
			expect(fahrenheit2celsius(32)).toEqual(0);
		});
		it ('fahrenheit2celsius of 212 is 100', () => {
			expect(fahrenheit2celsius(212)).toEqual(100);
		});
		it ('fahrenheit2celsius of 50 is 10', () => {
			expect(fahrenheit2celsius(50)).toEqual(10);			
		});
	});
});