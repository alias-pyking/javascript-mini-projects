const http = new EasyHttp();

const baseUrl = 'https://jsonplaceholder.typicode.com';
// http.get(`${baseUrl}/posts`, (error, response) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(response);
// 	}
// });
const data = {
	title: 'some posts',
	body:'Some body of the post'
}
console.log('something');
http.post(`${baseUrl}/posts`, data, (error, response) => {
	if (error) {
		console.log(error);
	} else {
		console.log(response);
	}
})
http.put(`${baseUrl}/posts/1`, data ,(error, response) => {
	console.log(error);
	console.log(response);
})