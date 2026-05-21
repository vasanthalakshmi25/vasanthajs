//while
var a = 30;
var b = 30;
while( a==b)
    { 
    console.log(a); // 30
    b++; // 31
}

//do while
do{
    console.log(a,b); 
    a++; // 32
}while(a == b) 

//for loop
for (var i = 1; i <= 10; i++){ 
    console.log(i) 
}

//switch
var a = 'a';
var b = 'b';
var c = 'c';
var vv = 'sss'
switch(a){
   case 'a':
       console.log(' this cases a');
       break;
  case 'b':
        console.log(' this is cases b');
       break;
   case 'c':
        console.log(' this is cases c');
       break;
 default:
   console.log('Hi');
}

//if-else
if(a === 20){
    console.log(' a is equal to b')
}else{
  console.log(' a is not equal to b')  
}
// Ternary Operator
10 === 20 ? console.log(' a is equal to b') :  console.log(' a is not equal to b');

//for-of loop
const arr = [1,2,3,4];

/* for(var i =0; i<10; i++){}
for(var index of arr){}
*/

for(var i = 0; i < arr.length; i++){ // 3tmie 
    console.log(arr[i], "for loop")
}

for( var value of arr){   //1time
    console.log(value)
}