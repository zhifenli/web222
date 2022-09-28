var i, len;
let colors = ["red","green","blue","yellow","white"];
function f(e){
    console.log(e);
}
colors.forEach(f);

colors.forEach(function(e){
    console.log(e);
})

// colors.forEach((e)=>console.log(e));

var nums = [5,3,7,6,8];
var nums2 = [];
nums.forEach(function(e){
    e+=10;
    nums2.push(e);
});
console.log(nums);
console.log(nums2);



var nums3 = nums.map(function(e){
    return e+=10;
});
console.log(nums3);


var nums4 = nums.map(e=> e+=10)
console.log("nums4: " + nums4);

var num1 = nums.find(function(e){
    return e%2 ==0;
});
console.log(num1);


var odd = nums.filter(function(e){
    return e%2 != 0;
});
console.log(odd);

var bool = nums.every(function(e){
    return e%2 != 0;
});
console.log(bool);