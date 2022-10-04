function measure(arr){
    var sum = 0;
    arr.forEach(element => {
        sum+=element.length;
    });
    return sum;
}

function measure2(arr){
    const calculateSum = (acc, cur) =>  acc + cur.length;

    return arr.reduce(calculateSum, 0);
}

console.log(measure(['a', 'bc']));
console.log(measure2(['a', 'bc']));

function checkAges(arr, cutOff){
    var flag = true;
    arr.forEach(item=>{if(item<cutOff) flag=false;});
    return flag;
}
console.log(checkAges([16, 18, 22, 32, 56], 19));
console.log(checkAges([16, 18, 22, 32, 56], 6));

function checkAges2(arr, cutOff){
    
    return arr.every(item=>item>=cutOff);
    
}
console.log(checkAges2([16, 18, 22, 32, 56], 19));
console.log(checkAges2([16, 18, 22, 32, 56], 6));

