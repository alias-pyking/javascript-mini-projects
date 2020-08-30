const http = new EasyHttp();

const baseUrl = 'https://jsonplaceholder.typicode.com';
// http.get(`${baseUrl}/posts`)
// 	.then(data => {
// 		console.log(data);
// 	}).catch(err => {
// 		console.log(err);
// })	

http.delete(baseUrl + '/posts/1')
	.then(data => {
		console.log(data);
	}).catch(err => {
		console.log(err);
})