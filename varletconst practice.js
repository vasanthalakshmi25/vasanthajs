//var has functionscope,accessible throughout the function
function example() {
    console.log(x); // Output: undefined (hoisted)
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Output: 20 (function scope)
    }
    console.log(x); // Output: 20 (no block scope)
}
example();

//let has blockscope , limited to the block{}

function letexample() {
    //console.log(y); // Uncommenting this line throws ReferenceError
    let y = 10;
    if (true) {
        let y = 20; 
        console.log(y); // Output: 20 (block scope)
    }
    console.log(y); // Output: 10 (outer `y` value)
}
letexample();

//const is similiar to let, block scoped
function constexample() {
    const z = 10;
    // z = 20; // Uncommenting this line throws TypeError: Assignment to constant variable
    if (true) {
        const z = 30;
        console.log(z); // Output: 30 (block scope)
    }
    console.log(z); // Output: 10 (outer `z` value)
}
constexample();