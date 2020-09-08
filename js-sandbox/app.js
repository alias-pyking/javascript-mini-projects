// // // Regular expressions

// // let re;
// // re = /hello/;
// // re = /hello/i; // i = case insensitive
// // // re = /hello/g; // Global search
// // // const result = re.exec("Hy hello");
// // // console.log(result);

// // // const result = re.test("Hello");
// // // console.log(result);

// // const str = "Sks Hello there";

// // // const result = str.match(re);
// // // console.log(result);

// // const result = str.search(re);
// // console.log(result);

// let re;

// // Literal characters
// re = /hello/;
// re = /hello/i;

// // Meta characters
// re = /^h/i; //start with

// re = /ld$/i; // ends with

// re = /^hello$/i;

// re = /^he.lo$/i;

// re = /h*llo/i;

// re = /gre?a?y/i; //optional character

// re = /gre?a?y\?/i;

// re = /gr[ae]y/i;

// re = /[GF]r[ae]y/i;

// re = /[A-Z0-9]ray/;

// re = /hel{4}o/i; //must occur m amoutn of times
// re = /hel{2,4}o/i; // in b/w the range

// re = /hel{2,}o/i; // atlease 2

// // Grouping
// re = /^([0-9]x){3}$/;

// re = /\w/; // word character
// re = /\w+/; // + one or more

// re = /\W+/; // Non-word character

// re = /^\d$/;

// re = /^\+91\d{10}/;

// re = /\D/; //not digit

// re = /\s/; // whitespace char

// re = /\S/;

// res = /hell\b/i;

// // Assertions

// re = /x(?=y)/;

// re = /x(?!y)/;

// const str = "dasdsfsxsdfadf";
// const result = re.exec(str);
// console.log(result);

// const reTest = (re, str) => {
//   if (re.test(str)) {
//     console.log(`${str} matches ${re.source}`);
//   } else {
//     console.log(`${str} does not matches ${re.source}`);
//   }
// };

// reTest(re, str);

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const namesArr = ["Shubham", "Sks", "Jack", "Elon", "Juck"];

const names = nameIterator(namesArr);

// console.log(names.next());

function* sayNames() {
  yield 'Jack';
  yield 'Sks';
  yield 'Elon';
  yield 'gates';
}
const name = sayNames();

console.log(name.next());