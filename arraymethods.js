//array methods
/*1.Sort
2.Push
3.Pop
4.Shift
5.Unshift
6.Concat
7.indexOf
8.lastIndexOf
9.Reverse
10.Slice
11.Splice
12.includes
13.find
14.findIndex
15.Every
16.Some*/

//1.push:-inserting elements at end of the array
const users  = ['name1', 'name2', 'name3'];
console.log(users, '=== before push');
users.push('name4');
console.log(users, '== after push');

//2.unshift:- used to add items at the first of the array
users.unshift('vassu');
console.log(users, '== after unshift');

//3.pop:- it is used to remove items from the end of the array
users.pop();
console.log(users, '== after pop');

//4.shift - it will remove the items from starting of the array 
users.shift();
console.log(users, '== after shift');

//isarray()
const isAnArray = Array.isArray(users);   //true
console.log(isAnArray)

const obj = {
    name:"Hi",
    age:20
}
console.log(Array.isArray(obj))   //false

//5.concat():- combining of two arrays into single array
const arr2 = [1,2,3];
const arr3 = [4,5,6];// [1,2,3,4,5,6] or  
const arr4 = arr2.concat(arr3);
console.log(arr4, " ====")
//[4,5,6,1,2,3]
const arr5 = arr3.concat(arr2);

console.log(arr5, " ====")

// Values();
const fruites = ['apple', 'banana', 'manago'];
const iter = fruites.values();
console.log(iter)

for (const val of iter){
    console.log(val)
}
//6.sort() :- process of arraging items in a alphabetical order or numerical order
const sortFurites = ['manago', 'apple', 'banana', 'orange'];
sortFurites.sort();
console.log(sortFurites);

const numbSorting = [2,4,5,1,3];
numbSorting.sort();
console.log(numbSorting)

//7.Reverse:-reversing the array.. items will be printed from last to first
//reverse - org, ban,app, man
const reverseItem = [1,2,3,4,5];
reverseItem.reverse();
console.log(reverseItem)

//8.indexOf // 0,1,2,3,4,5  indexof method gives the indexnumber of particular item in the array, we give value , it searches that and provide indexnum of that value
const arr = [1,2,3,4,5,5];

const index = arr.indexOf(3);
const index1 = arr.indexOf(6);
console.log(index)
console.log(index1)

//9.lastIndexOf:- gives the imdex of a value , if one number is there multple times it gives indexnumber which is present at that last of the array
const newArr = [1,2,3,4,5,3,5,3,2];
const lastIndex = newArr.lastIndexOf(2);
console.log(lastIndex)

//10.Slice - its a kind of  shallow copy , finding out certain items from a range m to n , new array is created everytime when we slice
const sliceArr = [1,2,3,4,5];      //index 0,1,2,3,4
const sclicedArr = sliceArr.slice(2,5); // 1,2,3,4,5 - values
const dd = sliceArr.slice(1,2)

console.log(sclicedArr, dd)
console.log(sliceArr)

///11.Splice - add element into array or remove element into array
//splice(startindex, howManyIndexremove)
const arrsplice = [1,2,3,4,5,6,7];
 //arr3.splice(2,1, 5,6,7,8,9); //start index 2 and remove 2 
console.log(arrsplice,"====")

arrsplice.splice(3,1)
console.log(arrsplice,"=== after")

arrsplice.splice(2, 3,9,8,0)
console.log(arrsplice,"=== after ===")

//12.includes:- it checks whether the given value is present or not in the array
const includeArr = [1,2,3,4,5];
const has = includeArr.includes(5);
const notHas = includeArr.includes(6);
console.log(has)
console.log(notHas)

//13.find - [1,2,3,4,5] // 0,1,2,3,4 reteurn an value its find the value which we are searching there are not , if it is present it give that value as output 

const findArr = [1,2,3,4,5];
const resultArr = findArr.find( (val) => val === 5 ); // value
console.log(resultArr)

//14. findIndex() - retrun an index of value
const findIndex = findArr.findIndex( (val) => val === 5 );
console.log(findIndex)

// 15. every

const arr6 = [2,4,6,7]

//2 % 2 === 1 - false
const isEven = arr6.every( (val) => val % 2 === 0);
console.log(isEven)

//16.some 

const isEvenNumber = arr6.some( (val) => val % 2 === 0);

console.log(isEvenNumber)

//17.map - create a new array with result of calling provided the function 

const sum = arr6.map( (num) => num + 2 );

console.log(sum, arr)

//18.filter - create a new array 

const isEvenNum = arr6.filter( (val) => val % 2 === 0 );
console.log(isEvenNum)

//19.reduce

const sumArr = arr6.reduce( (acc, curr) => { // 0 , 2  // 2 , 4
  return acc + curr   // 0 + 2 // 2  // 2 + 4 // 6
});

console.log(sumArr)