var student = ['Tom Sue', 'Sam Jiff', 'Dave Mike'];
window.onload = function (){
    var e = document.getElementById('id1');
    e.innerHTML += "-Document Object";
    // for(let i = 0; i<student.length; i++){
    //     text += "<p>"+student[i]+"</p>";
    // }
    // for(let i = 0; i<student.length; i++){
    //     text += `<p>${student[i]}</p>`;
    // }

// for(let i = 0; i<student.length; i++){
//         text += `<li>${student[i]}</li>`;
//     }
    
//e.innerHTML = text;
 createList(student);
}
function createList(student){
    e = document.querySelector('#id2');
    var text = "<ol>";
    for(let i = 0; i<student.length; i++){
        text += `<li>${student[i]}</li>`;
    }
    text += "</ol>";
    e.innerHTML += text;
}
function createTable(student){
    e = document.querySelector('#id2');
    var text = ' <table table border = "2px"><tr><th>No.</th><th>Name</th></tr>';

    for(let i = 0; i<student.length; i++){
        text += `<tr><td>${i+1}</td><td>${student[i]}</td></tr>`
    }
    text += "</table>";
    e.innerHTML += text;
}
// function createMessage(){

// }