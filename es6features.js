/*1.Default Parameters
2.Template Literals 
3.Multi-line Strings 
4.Destructuring Assignment 
5.Enhanced Object Literals 
6.Arrow Functions 
7.Promises 
8.Block-Scoped Constructs Let and Const
9.Classes 
10.Modules
11.Map
12.filter
13.reduce
14.spread operator 
15.rest operator*/

//learn this before starting react
//map (array method)
const data = [
    {
        id:1,
        title:'first',
        age: 20
    },
    {
        id:2,
        title:'second',
        age: 30
    },
    {
        id:3,
        title:'third',
        age:40
    }
];

const userTitle = data.map( (item) => item.title.toUpperCase() );
console.log(userTitle);
console.table(userTitle)

//filter
const filterData = data.filter( (item) => item.age < 40);
console.log(filterData)

//find
const findItem = data.find( (item) => item.age === 30 );
console.log(findItem)

//findIndex
const itemIndex = data.findIndex( (item) => item.age === 30 )
console.log(itemIndex)

//concat
const arr  = [1,2,3,4,5];
const arr1 = [6,7,8];
const arr2 = [9,0];
//1,2,3,4,5,6,7,8,9,0
const concatArr = arr.concat(arr1,arr2)
console.log(concatArr)

const filterArray = [20, 30, 40, 50,60];
const flterArrgrathan30 = filterArray.filter( (item) => {
    return item > 30
} );
console.log(flterArrgrathan30)

//summation of items through for loop
let sum = 0;
for( let i = 0; i < arr.length; i++)
{
    sum += arr[i]
}
console.log(sum)

//reduce  arr.reduce( (acc, cur, index, arr) => {},intialValue)
const newArr = [1,2,3,4,5];

const sumArr = newArr.reduce( (acc, cur, index) => {
    console.log('acc is ', acc)
    console.log('cur is ', cur)
    console.log('index is ', index)
    return acc + cur
},0);
console.log(sumArr)

const normalFunSum = newArr.reduce( function(acc,cur){
    return acc + cur
},0)
console.log(normalFunSum)

const initialValue = 0
const dataAgeSum = data.reduce( (total, item) => {
    console.log({total})
    console.log({item})
    return total + item.age
},initialValue);
console.log(dataAgeSum)

const multiArr = [[1,2,3], [4,5,6], [7,8,9]];
//[1,2,3,4,5,6,7,8,9]
const flatenArr = multiArr.reduce( (acc, cur) => {
    return acc.concat(cur)
},[]);

console.log(flatenArr)