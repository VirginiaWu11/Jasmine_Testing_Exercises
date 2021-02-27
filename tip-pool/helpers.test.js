describe('helpers tests', function() {
	it('should calcuate the percentage of tip', function() {
		expect(calculateTipPercent(144, 5)).toEqual(3);
	});

	// it('should add td element to table row', function() {
	// 	let table1 = document.createElement('tr');
	// 	appendTd(table1, 5);
	// 	expect(table1).toEqual(
	// 		<tr>
	// 			<td>5</td>
	// 		</tr>
	// 	);
	// });
});
