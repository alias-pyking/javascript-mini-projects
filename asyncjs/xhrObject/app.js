const getCustomerButton = document.getElementById('get-customer');
const getCustomersButton = document.getElementById('get-customers');

getCustomerButton.addEventListener('click', loadCustomer);

function loadCustomer() {
	const xhr = new XMLHttpRequest();
	xhr.open('get', 'customer.json', true);
	xhr.onload = function () {
		if (xhr.status === 200) {
			// console.log(xhr.responseText);
			const customer = JSON.parse(xhr.responseText);
			const output = `
							<ul>
							<li>Id: ${customer.id}</li>
							<li>Name: ${customer.name}</li>
							<li>Company: ${customer.company}</li>
							<li>Phone Number: ${customer.phone}</li>
							</ul>
							`;
			document.getElementById('customer').innerHTML = output;
		}
	}
	xhr.onerror = function () {
		console.log('Something went wrong')
	}
	xhr.send();
}

getCustomersButton.addEventListener('click', loadCustomers);

function loadCustomers() {
	const xhr = new XMLHttpRequest();
	xhr.open('get', 'customers.json', true);
	xhr.onload = function () {
		let output = '';
		const customers = JSON.parse(xhr.responseText);
		customers.forEach((customer) => {
				output += `<li>Id: ${customer.id}</li>
				<li>Name: ${customer.name}</li>
				<li>Company: ${customer.company}</li>
				<li>Phone Number: ${customer.phone}</li>
				<hr>`;
		});
		document.getElementById('customers').innerHTML = output;
	}
	xhr.send();
}