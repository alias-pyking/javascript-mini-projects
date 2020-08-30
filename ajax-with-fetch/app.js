const getTextButton = document.getElementById('txt-data-btn');

getTextButton.addEventListener('click', (event) => {
	fetch('data.txt')
		.then((response) => {
			return response.text();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
	})
});

const getJsonButton = document.getElementById('json-data-btn');
getJsonButton.addEventListener('click', () => {
	fetch('data.json')
		.then(response => {
			return response.json();
		}).then(data => {
			console.log(data);
		}).catch(error => {
			console.log(error);
		});
});

const getApiButton = document.getElementById('api-data-btn');

getApiButton.addEventListener('click', () => {
	fetch('https://api.github.com/users?page=2')
		.then(response => {
			console.log(response);
			return response.json();
		}).then(data => {
			console.log(data);
		}).catch(error => {
			console.log(error);
	})
});