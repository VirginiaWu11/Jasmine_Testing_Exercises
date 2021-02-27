it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment({ amount: 1000000, years: 30, rate: 0.02 })).toEqual(3696.19);
	expect(calculateMonthlyPayment({ amount: 500000, years: 15, rate: 0.03 })).toEqual(3452.91);
});

it('should return a result with 2 decimal places', function() {
	// let monpmt = calculateMonthlyPayment({ amount: 1000000, years: 30, rate: 0.02 });
	// let decimals = monpmt.toString().split('.')[1].length;
	expect(calculateMonthlyPayment({ amount: 1000000, years: 30, rate: 0.02 })).toBe(3696.19);
	expect(calculateMonthlyPayment({ amount: 500000, years: 15, rate: 0.03 })).toBe(3452.91);
});

/// etc
