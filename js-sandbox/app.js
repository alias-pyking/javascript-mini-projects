// // Regular expressions

// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// // re = /hello/g; // Global search
// // const result = re.exec("Hy hello");
// // console.log(result);

// // const result = re.test("Hello");
// // console.log(result);

// const str = "Sks Hello there";

// // const result = str.match(re);
// // console.log(result);

// const result = str.search(re);
// console.log(result);

let re;

// Literal characters
re = /hello/;
re = /hello/i;


// Meta characters
re = /^h/i; //start with

re = /ld$/i; // ends with

re = /^hello$/i;

re = /^he.lo$/i;

re = /h*llo/i;


re = /gre?a?y/i; //optional character

re = /gre?a?y\?/i;

const str = 'grey?';

const result = re.exec(str);
console.log(result);

const reTest = (re, str) => {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does not matches ${re.source}`);
	}
}
reTest(re, str);