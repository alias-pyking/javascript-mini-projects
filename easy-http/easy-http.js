/**
 * @author Shubham sk
 * @version 3.0.0
 * @name EasyHttp
 * @description Http library for making http requests (obviously)
 * @license MIT
 */
class EasyHttp{
	// Http Get request
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
		
	}	
	async post(url,data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		const resData = await response.json();
		return resData;
	}
	async put(url,data) {
		const response = fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		const resData = await (await response).json();
		return resData;
	}
	async delete(url) {
		const response = fetch(url, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' }
		});
		const resData = await 'Resource delete';
		return resData;
	}
}