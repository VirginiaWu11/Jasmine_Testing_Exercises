let pmt = document.querySelector('#monthly-payment');

window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {}

// Get the current values from the UI
// Update the monthly payment
function update() {
	pmt.innerText = calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
let pay;
function calculateMonthlyPayment(values) {
	let p = values.amount;
	let i = values.rate / 12;
	let n = values.years * 12;
	let num = p * i / (1 - (1 + i) ** -n);
	pay = (Math.round(num * 100) / 100).toFixed(2);
	return Number(pay);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
