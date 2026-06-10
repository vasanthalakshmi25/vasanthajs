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

//Default parameters
function DefaultPara(a,b=10) {
  console.log(a,b)  
}
DefaultPara(20, 30)

function area(height, width){
    height = height || 40;
    widht  = width || 50 
    return height * width;
}

console.log(area(20,30))

const companyName = [
    {
        name:'HCL',
        year:'2015',
        level:'l5'
    },
    {
        name:'Infosys',
        year:'2014',
        level:'l5'
    },
    {
        name:'TCS',
        year:'2010',
        level:'l5'
    },
    {
        name:'ADP',
        year:'2010',
        level:'l3'
    }
]

const namesArr = companyName.map( (obj) =>  obj.name);

//filter

const filterArr = companyName.filter ( (obj) => obj.level ==='l5'  )

console.log(namesArr)
console.log(filterArr)

const users = [
    {
        name:'Hi',
        age: 20,
    },
    {
        name:'Hello',
        age: 20,
    },
    {
        name:'Welcom',
        age: 20,
    },
]

const userNames = users.map( (user) => user.name );

console.log(userNames)
//array.map( (value, index, arry) => { // code here} )

const newMapArr = users.map( (value, index, users) => {
   return {
       value,
       index,
       users
   } 
});

console.log(newMapArr)
/* const users = {
    name:'test',
    age:20,
    company:'TCS'
}

const el = {
        name:'TCS',
        year:'2010',
        level:'l3'
    }
users.name

// const arr = [1,2,3,4,5] // 0, 1,2,3,4 = arr [0]
*/

//1.Default parameters
function DefaultPara(a,b=10) {
  console.log(a,b)  
}

DefaultPara(20, 30)
    
function area(height, width){
    height = height || 40;
    widht  = width || 50 
    return height * width;
}

console.log(area(20,30))



function arrFun(a,b = 10){
    console.log(a,b)
}
arrFun(50)

//2.Template Literals 
//es6
const fName ="Hi";
const lName = 'Hello'
const fullName = `you're name ${fName} ${lName}`;
console.log(fullName);

//es5 
var name = 'you"re name ' + fName + '' + lName; 
console.log(name);

//3.multi -line string

//es5 
var promot = ' Hello \n' + 'Hi \n' + 'welcome'

console.log(promot)

//es6 

const userPromot = `Hello 
Hello 
hhh
test`
console.log(userPromot)

//4.Destructing 

//es5
const arr9 = [1,2,3,4,5];
const index0 = arr9[0] // 1
const index1 = arr9[1] // 2
const index2 = arr9[2] // 3
console.log(index0)
console.log(index1)
console.log(index2)

//
//es6
const [a,b] = arr9;
console.log(a,b); //1,2

const [d,,,,e] = arr9
console.log(d,e); //

const [ar1,ar2,ar3,ar4,ar5,ar6 = 10] = arr9;

console.log(ar5,ar6)


const userName = ['Test1','Test2'];

const [user1,user2,user3 = 'Test3'] = ['Test4','Test5'];
console.log(user1)
console.log(user2)
console.log(user3)

let [userVal1,userVal2] = ['new1','new2'];
//swapping item 
console.log(userVal1, userVal2, "==== before swapping");
[userVal1, userVal2] = [userVal2, userVal1];
console.log(userVal1, userVal2, "=== after swapping");

//object
const vehicle = {
    brand: 'TATA',
    modal: 'Nexon',
    type: 'car',
    typeOfVehicle:'two wheelr',
    color: "red",
    details:{
        date: 8,
        month: 5,
        year: 2026
    }
}

//function car( { typeOfVehicle, color}){
function car(values){
   //console.log(values, " ==== values");
   
   const {typeOfVehicle, color, isEngine = "Good" } = values;
   
   console.log(typeOfVehicle, "=== typeOfVehicle")
   console.log(color, "=== color")
   console.log(isEngine, "=== isEngine")
};
car(vehicle);


function keyExtraction(key){
    const { [key] : returnValue } = vehicle;
    return returnValue;
};

const carBrand1 = keyExtraction('brand')
const modal1 = keyExtraction('modal')
console.log("=====================================")
console.log(carBrand1, "carBrand1 ")
console.log(modal1, "modal1 ")


const { brand, modal, ...rest } = vehicle;

const { details:{ date} } = rest;

const { brand: carBrand } = vehicle

console.log("=====================================")

console.log(brand, "=== brand")
console.log(modal, "=== modal")
console.log("=====================================")
console.log(rest, '==== rest operator')
console.log("=====================================")
console.log(date)
console.log("=====================================")
console.log(carBrand, '==== carBrand')
console.log("=====================================")


//spread operator  -  to combine two object / array (...)
//object
const obj1 = {
    a:'a1',
    b: 'b1'
}

const obj2 ={
    c:'c1',
    d: 'd1'
}

const obj3 = {...obj1, ...obj2};
console.log(obj3)

// array

const arr_1 = [1,2,3,4,5];
const arr_2 = [6,7,8,9];
const arr_3 = [...arr1, ...arr2];
const arr_4 = [...arr1, arr2];

console.log(arr_3);
console.log(arr_4);


//Promise 
// three state 
//1. fulfilled - operation is completed 
//2. pending  - operation is not completed 
//3. rejected - an error occurs

/*let promise = new Promise( functin(resolve, reject){
    // do operation
})*/

const count = false;

let countValue = new Promise( (res, rej) => {
    if(count){
        res("yes count is there")
    }else{
        rej('no count is not there')
    }
}) 

countValue.then( function(result){
    console.log(result,"===")
})
.catch( function(result){
  console.log(result)  
});


//finally - resolve or rejected

// let countValue = new Promise( function (resolve, reject) {
//     reject('Promise rejected')
// })

// countValue.finally( () => {
//     console.log(" this is code executed")
// })

const userData = {
    isActive: true,
    name:"Hello",
    age: 30
}

let userDetails = new Promise ( (res, rej) => {
    if(!userData.isActive){
        res(userData)
    }else{
        rej('user data is not isActive')
    }
})

userDetails.then( (result) => {
     console.log(result, "==== result then block")
})
.catch( (result) => {
     console.log(result, "==== result catch block")
})
.finally( () => {
     console.log("====  finally block")
})


// four api- 
//1. api suu -> api -> api -> 

/*api(function(result){
    api1(function(result){
        api2( function(result){
            if(err){
                // do
            }else{
                //print response
            }
        })
    })
})*/

// api().then( () =>{
//     return api1();
// }).then( () => {
//     return api2();
// }).catch( (error) =>{
//     //
// })
// promise.all();
// promise.allSettled()
//promise.race()
//promise.any()
//promise.resolve()
//promise.reject()
//promise.catch()
//promis.finally()
//promise.then()

// - all promise are success - then it suucess - 
// - any promise failed - then it will first reject resaon
//promise.all( [promie1,promise2])
/*console.log("===========================================")
let api1 = new Promise( (res,rej) => {
    setTimeout( () => res("Resolved API1"),1000)
});
console.log("===========================================")
let api2 = new Promise( (res,rej) => {
    setTimeout( () => rej(new Error("Api2 is an error")),2000)
});
console.log("===========================================")
let api3 = new Promise( (res,rej) => {
    setTimeout( () => res("Resolved API3"),500)
});

Promise.all( [api1,api2,api3]).then( (value) => {
    console.log(value)
}).catch( (error) => {
    console.log(error.message)
});
Promise.allSettled( [api1,api2,api3]).then( (value) => {
    console.log(value)
}).catch( (error) => {
    console.log(error.message)
});

Promise.race( [api1,api2,api3]).then( (value) => {
    console.log(value)
}).catch( (error) => {
    console.log(error.message)
});

Promise.any( [api1,api2,api3]).then( (value) => {
    console.log(value)
}).catch( (error) => {
    console.log(error.message)
});
*/
//closures
function outerFunc(){
    
    let outervar = "I am outside";
    
    function innerFunc(){
        console.log(outervar);
    }
    return innerFunc
}

function exec(){
    const myInnerFun = outerFunc();
    myInnerFun();
}
exec();

function outerFun(x){
    return function innerFun(y){
        return function innerFun1(z){
            return x+y+z;
        }
    }
};

const value = outerFun(2)(3)(4);

console.log(value)


//IIFE(immediately Invoked function expersion)
//synatx 

/*
( function (){
    //logic
})()*/


function names(){
    console.log("Hello")
};

names();

( function () {
    console.log("IIFE")
})();

