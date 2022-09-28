// Question 1:

function averageForValues(one, two, three) {
    let total = Number(one) + Number(two) + Number(three);
    let average = total / 3;
    return average;
}
console.log(averageForValues("1.2", "2.3","3"));


//Question 2:
function averageSentence(one, two, three = 0) {
    return averageForValues(one, two, three);
}

console.log(`Average of 1, 2, 3 is ${averageSentence("1", "2", "3")}`);
console.log("Average of 1.5, 2.6, and 0 is" + averageSentence("1.5", "2.6"));


//Question 3:
function randomMove(){
    let direction = ["Up","Left","Down","Right"];
    let randomDir = Math.floor(Math.random() * 4);
    let randomNum = Math.floor(Math.random() * 5 + 1);
    return `${direction[randomDir]}:${randomNum}`; //direction[randomDir] + ":" + randomNum;
}
console.log(randomMove());
console.log(randomMove());
console.log(randomMove());


//Question 4
function half() {
    let len = arguments.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
        if (typeof arguments[i] == 'number') {
            arr.push(arguments[i] / 2);
        }
    }
    return arr;
}
console.log(half(2, 4, 6));
console.log(half(2, true, "8", 10));


//Queation 5
function createDiscount(percent) {
    return function(amount) {
        return amount – (amount * percent);
    }
}
let discount = createDiscount(0.1);
let total = discount(50);
