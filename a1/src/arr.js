

let arr = [11, 12, 13, 14, 15];

// internal iteration: no side-effect to array
//           consumer function. 
arr.forEach(function (item, index) { console.log(`item: ${item}, index: ${index}`) });
let tripleArr = arr.map(x => x * 3)
console.log(tripleArr);
let triArr = [];
for (let i = 0; i < arr.length; i++) {
  triArr.push(arr[i] * 3);
}

let triArr2 = [];
arr.forEach(x => triArr2.push(x));

console.log("### foreach taking log")
arr.forEach(console.log);
// arr.forEach((item, index, selfArr) => console.log(item, index, selfArr));

console.log("### foreach taking log  Done")

console.log("triArr2", triArr2);

console.log(triArr);
let evenNums = arr.filter(function (item, index) {
  // return item % 2 == 0;
  return index % 2 == 0;
});

let total = arr.reduce((acc, item) => {
  const newTotal = acc + item;
  console.log(`reducing: acc=${acc}, item=${item}, nextAcc=${newTotal}`);
  return newTotal;
}, 0);
console.log("total: ", total)

console.log("even", evenNums);

// external iteration
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
