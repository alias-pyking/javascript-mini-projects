/**
 * @author Shubham sk
 * @version 2.0.0
 * @name EasyHttp
 * @description Http library for making http requests (obviously)
 */
class EasyHttp{
	// Http Get request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
		
	}	
	post(url,data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}
	put(url,data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				headers: { 'Content-type': 'application/json' }
			})
				.then(res => res.json())
				.then(data => resolve('Resource deleted.'))
				.catch(err => reject(err));
		});
	}
}