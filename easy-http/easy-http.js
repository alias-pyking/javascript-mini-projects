/**
 * @author Shubham
 * @name EasyHttp
 * @description Http library for making http requests (obviously)
 */
class EasyHttp{
	constructor() {
		this.http = new XMLHttpRequest();
	}
	// Http Get request
	get(url, callback) {
		this.http.open('GET', url, true);
		
		this.http.onload = () => {
			if (this.http.status === 200) {
				callback(null, JSON.parse(this.http.responseText));
			} else {
				callback(`Error: ${this.http.status}`, null);
			}
		}
		this.http.send();
	}	
	post(url,data, callback) {
		this.http.open('POST', url, true);
		this.http.setRequestHeader('Content-type', 'application/json');
		this.http.onload = () => {
			if (this.http.status === 201) {	
				callback(null, JSON.parse(this.http.responseText));
			} else {
				callback(`Error: ${this.http.status}`, null);
			}
		}
		this.http.send(JSON.stringify(data));
	}
	put(url,data, callback) {
		this.http.open('PUT', url, true);
		this.http.setRequestHeader('Content-type', 'application/json');
		this.http.onload = () => {
			if (this.http.status === 200) {	
				callback(null, JSON.parse(this.http.responseText));
			} else {
				callback(`Error: ${this.http.status}`, null);
			}
		}
		this.http.send(JSON.stringify(data));
	}
	delete(url, callback) {
		this.http.open('DELETE', url, true);
		this.http.setRequestHeader('Content-type', 'application/json');
		this.http.onload = () => {
			if (this.http.status === 200) {	
				callback(null, JSON.parse(this.http.responseText));
			} else {
				callback(`Error: ${this.http.status}`, null);
			}
		}
		this.http.send(JSON.stringify(data));
	}
}