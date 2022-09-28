// function area(r){
//     return Math.PI*r*r;  
//     }
// console.log(area(4));
// console.log(area(4).toFixed(3));

// // function cToF(c){
// //     var f = (c *9/5)+32;
// //     return f+" F"
// // }
// // console.log(cToF(0));

// function convert(value, describe){
//     if (describe == 'C'){
//         let f = (value -32 ) *5/9;
//         return f + " F"
//     }
//     else if (describe == 'F'){
//         let c  = (value *9/5)+32;
//         return c + " C"
//     }
//     else{
//        throw Error ("Error")
//     }
// }

// console.log(convert(0, 'C'));
// console.log(convert(0, 'F'));
// console.log(convert(1, 'K'));


function isUnder50(num){
    if (num < 50){
        for (let i = 0; i<argument.length; i++)
        {
            if (arguments[i] > 50){
                return false;
            }
        }
    }
    return true;
}
console.log(isUnder50{1,2,3});
