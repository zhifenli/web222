
// Question 1;
//
function increament(){
    let count = 0;
    return  function (){
        return ++count;

   } 
}
var counter1 = increament();
console.log(counter1());
console.log(counter1());
console.log(counter1());

var counter2 = increament();
console.log(counter2());


function Product(name, price) { // class in c++
    this.name = name;
    this.price = price;
    this.print = () => console.log(`Product: name=${this.name}, price=${this.price}`);
    this.hello = function() {
        console.log("jelle");
    }
    return this;
}

const p1 = Product("Apple", 2.0);
p1.print();
p1.hello();


