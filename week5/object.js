var p ={
    x:5,
    y:10
}
var q=p;
q.x = 20;
console.log(q.x);

var p ={
    x:5,
    y:10
}
var q=Object.create(p);
q.x = 20;
console.log(q.x);