// Array is a collection of items

// const fruit = [ban, man, oran, apple]
// it will stored in index format 

//const arr = [1,2,3,4,5]; // 0 1 2 3 4
//arr[0] =1
//creating array in two ways 
//1. array literal

const arr = [];
const newArr = [1,2,3,4,5]
//variable.length;
console.log(newArr.length)
console.log(newArr)
//constructor 
const conArr = new Array()

const colors = ['red', 'green', 'yellow'];
console.log(colors.length) // 3

console.log(colors, "before update");
colors[1]
colors[2] = 'blue';
console.log(colors, "after update");

const arr1 = [];
console.log(arr1);
arr1[0] = 1;
arr1[1] = 2;
console.log(arr1)
console.log(arr1.length, "==== arr1")
arr1[arr1.length] = 3; // arr1[2] = 3 // [1, 2, 3] //3
console.log(arr1, "after update arr1")
console.log(arr1.length, "==== after update  length arr1")

//2.constructor way of creating array

const newConstructoArray = new Array(3); 
console.log(newConstructoArray.length);
console.log(newConstructoArray);

newConstructoArray[0] = 'Hi'
newConstructoArray[1] = 'Hello'
newConstructoArray[2] = 'Welcome'
console.log(newConstructoArray);
