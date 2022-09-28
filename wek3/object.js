let sr1 = "Fen";
let lname ="L";
let city = "Toronto";
console.log(sr1.length);
let fullName = sr1 + " "+ lname;
console.log(fullName);
console.log(sr1.charAt(2));
console.log(sr1[2]);
let r = sr1.concat(" ").concat(lname);
let t = sr1.concat(" ", lname);
console.log(r);
console.log(t);

let myArry1 = fullName.split(" ");
sr1.toUpperCase();
console.log(sr1);
console.log(sr1.toUpperCase())

//JS string object - property
//console.log(sr1.greeting());// 

// String.prototype.greeting = function (){
//     return "Hello" + this;
// }
// console.log(sr1.greeting());
// console.log("San".greeting);

// string.prototype.reverse = function(){
//     var rev = " ";

// }
console.log(sr1.reverse);
//"abbbcaabb" /a+b+/ + means 1 or more , 2,a?b ? mean 0 or 1

let str2 = "abbbcaabb";
console.log(/a+b+/.test(str2));

console.log(/Ab/.test(str2));
console.log(/Ab/i.test(str2));// i means ignore case -sensity
