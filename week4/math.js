// 

// var text = indMatches(66, 1, 345, 2334, 66, 67, 66);

// var x = /66/g;

// var found = text.match(x);
// console.log(found(tex));

let r1 = {
    w: 16,
    h: 28,
    show: function(){
        console.log('di: ' + this.w + '*' + this.h);
    }
};
function r2(){
    this.w = 20;
    this.h = 20;
}
// var r2= Object.create(r1);
r2.prototype = r1;
 var r2instance = new r2();
// r1.w = 1;
// r1.h = 9;
// r2instance.show();

// let r2 = Object.create(r1);
// r1.w = 11;
// r1.h = 10;
// r2.show();
// r1.show();
// let r2 = r1;
// r1.w = 8;
// r1.h = 2;
// r2.show();
//console.log(r2.prototype.show());
// r2instance.show()