// var p ={
//     x:5,
//     y:10
// }
// var q=p;
// q.x = 20;
// console.log(q.x);

const assert = require("assert");

// var obj2 = {name: "object2"};

// var p ={
//     x: 5,
//     y: 10,
//     o: obj2 // reference -> single data
// }

// var q = Object.create(p); // copy
// // var q = {...p}; // shaddow copy

// q.x = 20;
// obj2.name = "NEW NAME 2";

// console.log("p:", p);
// console.log("q:", q);

// const vip = {name: "vip1", balance: 1230000}; // vip = {}
// // vip = {};
// // Object.freeze(vip);
// vip.balance = 0; // ignored
// console.log(vip);

// function vipWithSpecialDiscount(vip) {

//     const newVip = {
//         ...vip,     // make copy, without side-effect
//         discount: Math.random(),
//         balance: 20
//     };

//     return newVip;
// }
// // data correctness
// const vip2 = vipWithSpecialDiscount(vip);

// console.log("vip1", vip);
// console.log("vip2", vip2);

// // copy json:   { ...oldJson }
// // copy array:    [ ...oldArray ]
// // json, array, are passed by reference, to function.
// function employee(name, jobtitle, born){
//     this.name = name;
//     this.jobtitle = jobtitle;
//     this.born = born;
// }
// employee.prototype.salary = 2000;
// const fred = new employee("Fred Flintston", "Caveman", 1970);
// console.log(employee);
// console.log(fred.name);
// console.log(fred);
// console.log(fred.jobtitle);
// console.log(fred.salary);
// console.log(fred.jobtitle);

// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("world", 6);

// console.log(result);

// let text1 = "Hello world!";
// let result1 = text1.substring(1, 4);

// let result2 = text1.slice(1, 4);
//console.log(result1 , result2)

// let result3 = ages.every(age=>age>18);
// // function checkage(age){
// //     return age > 18;
// // }
// console.log(result3);
// const result5 = ages.filter(age=>age>18);
// console.log(result5);

// const result6 = ages.find(age=>age>18);
// console.log(result6);

// const newArr = ages.map(item=>item+1);
// console.log(newArr);
// const ages = [32, 33, 16, 40]
// let text;
// ages.forEach(myFunction);
// function myFunction(item, index){
//     text += index + ": " + item;
//     return text;
// }
// console.log(text);
// function string(strValue) {
//     this.value = strValue;
// }
// // void classX::reverse() {
// // }

// string.prototype.reverse = function (){
//     let rver='';
//     for(let i = this.value.length - 1; i >= 0; i--){
//         rver += this.value[i];
//     }
//     return rver;
// }
// var string1 = new string("12345678"); // class instance, calling the constructor
// console.log(string1);
// console.log(string1.reverse());

// String.prototype.reverse = function (){
//     let rver='';
//     for(let i = this.length - 1; i >= 0; i--){
//         rver += this[i];
//     }
//     return rver;
// }

// var string2 = "12345678";
// //  new String("12345678"); // built-in String type, an object
// // String("12345678")

// console.log("string using built-in String: ", string2.reverse());

// var stri='i am the first the';
// var pat = /the/g; //var pat = new regExp(/the/g)
// console.log(stri.match(pat));
// console.log(pat.test(stri))

// var str = "School of ICT-Seneca College";
// console.log(str.split(/[ -]/)); // [ "School", "of", "ICT", "Seneca", "College" ]

// function log(s){
//     let array = [];
//     array = s.split('');
//     return array;
// }
// let s = 'Hello world!'

// console.log(log(s));

let arr = [];
function addItemToHistory(item) {
  arr.push(item);
  return arr;
}
let item = "bag";
console.log(addItemToHistory(item));

let array = [];
function buildArray(a, b) {
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}
console.log(buildArray(5, 10));
                                 
arr = [1, 2, 3, 4];
arr.map((item) => "$" + item);
// function addDollars(item){
//     return "$"+item;
//
console.log(arr.map((item) => "$" + item));

function tidy(arr) {
  arr = arr.map((item) => item.trim());
  return arr;
}
console.log(tidy([" hello", " world "]));

let count = 0;
function measure(arr) {
  let count = 0;
  arr.forEach((item) => {
    count += item.length;
  });
  return count;
}
console.log(measure(["a", "bc"]));

function measure2(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur.length;
  }, 0);
}

console.log(measure2(["a", "bc"]));

//7
function whereIsWaldo(arr) {
  arr.forEach((item) => {
    return item.find(/[wW]aldo/g);
  });
}
console.log(whereIsWaldo(["Jim Waldorf", "Lynn Waldon", "Frank Smith"]));

function whereIsWaldo(arr) {
  return arr.filter((x) => /[wW]aldo/g.test(x));
}
console.log(whereIsWaldo(["Jim Waldorf", "Lynn Waldon", "Frank Smith"]));

//8
function checkAges(ages, num) {
  return ages.every((x) => x >= num);
}
console.log(checkAges([16, 18, 22, 32, 56], 6));
console.log(checkAges([16, 18, 22, 32, 56], 19));

function containsBadWord(badWords, userName) {
  userName = prompt();
}

//10
function getKeyValuePair(s) {
  return s.split(/\s*:\s*/g);

  // let arr = s.split(':');
  // return arr.map(x => x.trim());
}
console.log(getKeyValuePair("colour: blue"));
console.log(getKeyValuePair("colour : red"));

//11
function getFullAddress(addresses) {
  addresses = addresses.replaceAll("St.", "Street").replaceAll("Rd.", "Road");
  return addresses;
}

// ([1-2][0-9][0-9])|(30[0-5])|([1-9][0-9])|([1-9])-(1[0-2])|([1-9])-([1-2][0-9])|(3[0-1])|([1-9])
//               3 digits     | 2 digits    | 1 digt

function isValidRoomNumber(s){
    const pat = /^([1-2][0-9][0-9]|30[0-5]|[1-9][0-9]|[1-9])-(1[0-2]|[1-9])-([1-2][0-9]|3[0-1]|[1-9])$/;
    return pat.test(s);
}

assert(isValidRoomNumber('1-1-1'))
assert(isValidRoomNumber('1-1-31'))
assert(isValidRoomNumber('1-1-29'))
assert(isValidRoomNumber('305-12-31'))
assert(isValidRoomNumber('290-12-31'))
assert(isValidRoomNumber('290-1-1'))

assert(!isValidRoomNumber('290-13-31'))
assert(!isValidRoomNumber('0-1-1'))
assert(!isValidRoomNumber('1-0-1'))
assert(!isValidRoomNumber('1-1-0'))
assert(!isValidRoomNumber('306-12-31'))
assert(!isValidRoomNumber('310-12-31'))
assert(!isValidRoomNumber('0-12-31'))
assert(!isValidRoomNumber('1-0-31'))
assert(!isValidRoomNumber('1-1-32'))


function isValidPassward(s){
    if(s.length < 8 || s.length > 32){
        return false;
    }
    if(!(/[A-Z]/g.test(s))){
        return false;
    }
    if(!(/\d/g.test(s))){
        return false;
    }
    if(!(/[!@#$%^&*-+{}]/g.test(s))){
        return false;
    }
    return true;
}
console.log('####'+ isValidPassward('WWWWW2222&&&&&&&&&'));

