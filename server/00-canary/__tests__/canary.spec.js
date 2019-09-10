describe('the canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

	describe.only('fahrenheit2celsius', () => {
		it ('fahrenheit2celsius of 32 is 0', () => {

		});
		it ('fahrenheit2celsius of 212 is 100', () => {
			
		});
		it ('fahrenheit2celsius of 50 is 0', () => {
			
		});
	});
});