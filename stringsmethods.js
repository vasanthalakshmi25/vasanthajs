//strings:- words written  in double quotes or sinfle quotes


//string methods
//1.string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//2.toLowerCase
console.log('HELLO'.toLowerCase())

//touppercasw
console.log('javascript'.toUpperCase())

//3.concat 

const str1 = 'Hello'
const str2 = "Hi";

console.log(str1.concat(str2));

//4.trim
const str3 = "             trim            ";
console.log(str3.trim())

//5.trimStart
const str4 = "             trimstart";

console.log(str4.trimStart())

//6.trimEnd
const str5 = "timeEnd         ";
const str6 = "          Welcome         ";

console.log(str5.trimEnd())
console.log(str6.trimEnd())


//7.padStart
console.log( 'hello'.padStart(10, '*'));

//8.padEnd
console.log( 'hello'.padEnd(10, 'h'));

//9.charAt
console.log('hello'.charAt(1));
//10.charcodeAt
console.log('hello'.charCodeAt(1))
//11.codePointAt
let text1 = "HELLO WORLD";
let code = text1.codePointAt(0);console.log(code)

//12.string at
const name = "learning javascript";
let letter = name.at(2);console.log(letter)

//13.split
console.log('hello world'.split(' ')); // retrn arry 
console.log("Hello World @ Hi".split('@'));
console.log('Hello,Hi,Welcome'.split(','));

//14.indexof
console.log( 'Hello world'.indexOf('w'))
//15.lastIndexOf
console.log("Hello world".lastIndexOf('o'))

//16.include 
console.log("Hello world".includes('gdgdg'))

//17.startsWith
console.log("Hello SSS".startsWith("Hello"))
console.log("Hello SSS".startsWith("SSS"))

//18.endsWith
console.log("Hello world".endsWith('world'))
console.log("Hello world".endsWith('d'))
console.log("Hello world".endsWith('Hello'))

//19.slice,substring,substr
//slice
let frits = "Apple, Banana, Kiwi";
//let part = frits.slice(7, 13);console.log(part)
let part1 = frits.slice(7);console.log(part1)
let part2 = frits.slice(-12);console.log(part2)
let part3 = frits.slice(-12, -6);console.log(part3)

//substring is also similar to slice 
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part = str.substring(13, 18);console.log(part)
console.log(str.substring(18, 13));  //If you call substring(18, 13), JavaScript will swap the values internally and treat it as substring(13, 18).
//swapping is only possible in substing not in slice
//substr()
let sub_string = "Mind, Power, Power,Soul";
// Use the substr() method to extract a substring f
let res= sub_string.substr(6, 5);
// Output the value of variable
console.log(res);

//20.replace //replaceAll
let res1=sub_string.replace("Power","space");
console.log(res1);
let res2=sub_string.replaceAll("Power","space");
console.log(res2);
