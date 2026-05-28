//strings:- words written  in double quotes or sinfle quotes


//string methods
//1.toString();
const arr=[1,3,4,5,6]
const convertString = arr.toString();
console.log(convertString, typeof(convertString));

//2.toLowerCase
console.log('HELLO'.toLowerCase())

//3.concat 

const str1 = 'Hello'
const str2 = "Hi";

console.log(str1.concat(str2));

//4.trim
const str3 = "             trim            ";
console.log(str3.trim())

//trimStart
const str4 = "             trimstart";

console.log(str4.trimStart())

//trimEnd
const str5 = "timeEnd         ";
const str6 = "          Welcome         ";

console.log(str5.trimEnd())
console.log(str6.trimEnd())


//padStart
console.log( 'hello'.padStart(10, '*'));

//padEnd
console.log( 'hello'.padEnd(10, 'h'));

//charAt
console.log('hello'.charAt(1));

console.log('hello'.charCodeAt(1))