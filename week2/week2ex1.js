function square(n){
    return n*n;
}

let a = 5;
console.log(square(a));
console.log(square());
console.log(square(2,3));
let h = square;
console.log(typeof(h));
console.log(h(2));

let greeting  = function(name){
    //return "Hello "+ name;
   // return `Hello `+name;
   // return `Hello ${name}`;
    return `Hello ${1}`;
};

// console.log(greeting("fen"));

// function add(a, b){
//     return arguments[0] + arguments[1];
// }

// console.log(add(2,3,4,4));

sum = 0;
function addv2(a){
    for(i = 0; i < arguments.length; i++){
        sum += a; 
}
console.log(addv2(arguments[1,2,3,4]));



}
