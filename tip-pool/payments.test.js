describe('payments test', function() {
	// beforeEach(function() {
	// 	billAmtInput.value = 100;
	// 	tipAmtInput.value = 20;
	// });

	it('should add a new payment to allPayments on submitPaymentInfo()', function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
		expect(paymentId).toEqual(1);
		let pay = document.querySelector('#payment1');
		pay.remove();
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
	});

	it('should add a row to the Payment Table', function() {
		appendPaymentTable({ billAmt: '100', tipAmt: '20', tipPercent: 20 });
		paymentId += 1;
		expect(paymentTbody.rows.length).toEqual(1);
		let pays = document.querySelector('#payment1');
		pays.remove();
	});

	it('should do nothing if the Bill and Tip amount are negative', function() {
		billAmtInput.value = -100;
		tipAmtInput.value = -20;
		expect(createCurPayment()).nothing();
	});
	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
	});
});
