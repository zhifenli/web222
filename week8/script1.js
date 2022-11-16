window.onload=function(){
//     var elem1 = document.getElementById('btn2');
//     elem1.onclick=function(){
//         console.log('Hi')
//     };

//     var elem2=document.getElementById('id2');

//     elem2.onmouseover=function(){
//         elem2.style.backgroundColor='green';
//     };
//     elem2.onmouseout=function(){
//         elem2.style.backgroundColor='yellow';
//     };
//     elem1.onclick=function(){
//         console.log('Hello, world');
//     }

//     var elem3 = document.getElementById('');
//     //<!--add mean append, both of them will show -->
//     elem3.addEventListener('click', function(){console.log('Hi you')})
//     elem3.addEventListener('click', function(){console.log('Hi you')})

function increment(){
     var elem=document.getElementById('count');
     var n = parseInt(elem.innerHTML)+1;
     elem.innerHTML=n;
}
//increment();
var timer = setInterval(increment, 3000);

document.getElementById('btn4').onclick=function(){
    clearInterval(timer);
}

}