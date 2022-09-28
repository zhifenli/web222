function log(s){
    for(let i =0; i<s.length;i++){
        console.log(s[i]);
    }
}
log(['red','blue',64])

var history =[];
function addItemToHistory(item){
    history.push(item);
}
addItemToHistory('apple');
console.log(history);

// var s = [5,10];
// function buildArray(s){
//     var nums = array.forEach(element => {
        
//     });
//     return nums;
// }
// console.log(nums);



function addDollars(nums){
    return nums.map (e=>e=e+'$');
}
console.log(addDollars([1,2,3,4]));
