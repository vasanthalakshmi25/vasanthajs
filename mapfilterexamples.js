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
 const users1 = {
    name:'test',
    age:20,
    company:'TCS'
}
console.log(users1.name);

const friendList = ["rupa","suresh","kavya","vijay"];

const addingMapMethod = friendList.map((value,index)=>{
    console.log(value);
    console.log(index);
    return {"id":index ,"name":value}
});

console.log(addingMapMethod);

const UsersList = [
    {
        "name":"rupa",
        "age":30
    },
    {
        "name":"Suresh",
        "age":30
    },
    {
        "name":"kavya",
        "age":26
    },
    {
        "name":"vijay",
        "age":26
    }
];


const BirthYearComibedUserList = UsersList.map((user)=>{
    console.log(user,":: user");
    const {name,age} = user;
    return {
        "name":name,
        "birthYear":new Date().getFullYear() - age,
        "age":age
    }
});

console.log(BirthYearComibedUserList);

const newObj = UsersList.reduce((prv,cur)=>{
    prv[cur.name] = cur.age;
    return prv;
},{});

console.log(newObj)

const arrNewObj = UsersList.reduce((prv,cur)=>{
    prv.push({
        "name":cur.name,
        "birthYear":new Date().getFullYear() - cur.age,
        "age":cur.age
    });
    return prv;
},[]);

console.log(arrNewObj);

const usingMapwithcombinedAgeAndName =UsersList.map((user)=>{
    console.log(user,":: ====");
    const newObj = {};
    newObj[user.name] = user.age;
    return newObj;
});

console.log(usingMapwithcombinedAgeAndName);

const usingReduce = UsersList.reduce((prv,cur)=>{
    //pop - last remove
    // push - last insert 
    // shift - frist remove
    // unshift - first insert 
    prv.push({[cur.name]:cur.age});
    return prv;
},[]);

console.log(usingReduce,"::: === usingReduce")