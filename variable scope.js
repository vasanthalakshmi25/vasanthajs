var a=20;  //global scope or global variable
 function print()
 {
    var b=30;     // local scope 
    console.log(a);
    console.log(b);
 };
 console.log(a);
 print();