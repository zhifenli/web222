// const newNode = document.createElement("li");
// const textNode = document.createTextNode("water");
// newNode.appendChild(textNode);
// const list = document.getElementById("myList");
//  list.insertBefore(newNode,list.children[1]);

 function changeOrder(){
  var ele1 = document.getElementById("change1");
  var ele2 = document.getElementById("change2");
  const list = document.getElementsByClassName("change");
  

 }
// function displayList() {
//   const arr = ["apple", "pear", "banana"];
//   const list = document.getElementById("id3");
//   for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = arr[i];
//     list.appendChild(li);
//   }
// }

// function buildTable(customer, keys) {
//   function newRow(key, value) {
//     const tr = document.createElement("tr");
//     const tdKey = document.createElement("td");
//     tdKey.innerHTML = key;
//     tr.appendChild(tdKey);
//     tdKey.style.fontWeight = "bold";
//     tdKey.style.color = "blue";

//     const tdValue = document.createElement("td");
//     tdValue.innerHTML = value;
//     tr.appendChild(tdValue);

//     return tr;
//   }

// //   const keys = Object.keys(customer);
//   const allRows = keys.map(key => newRow(key, customer[key]));

//   const table = document.getElementById("id4");
//   allRows.forEach(row => table.appendChild(row));
// }

// function doit() {
//   const li = document.createElement("li");
//   li.innerHTML = "new li text";

//   // const text = document.createTextNode("Juice");
//   // li.appendChild(text);

//   const list = document.getElementById("myList");
//   list.appendChild(li);
// }
// function addText() {
//   document.getElementById("id2").innerHTML = "This is a head";
// }

// function onload() {
//   displayList();
//   const customer = { name: "Tom", age: 32, city: "Toronto", email: "abc@gmail.com", role: "SWE"};

//   buildTable(customer, ["name", "email", "role", "city", "age", ]);
//   buildTable(customer, ["name", "email", "role", "city", "age"]);
// }

// function setAttribute() {
//   var elem = document.querySelector("#d1");
//   elem.setAttribute("class", "notes");
//   //  or just simply:
//   //   elem.className = "notes";
// }

// function importImg() {
//   var image = document.createElement("img");
//   image.height = "50";
//   image.src = "http://www.senecacollege.ca/images/seneca-logo2.svg";

//   document.body.appendChild(image);
// }


// window.onload = function() {		 
//   document.querySelector("#fullname").onchange = setOutput1;
//   document.querySelector("#colors").addEventListener( "change", setOutput2 );
//  }

//  function setOutput1() {
//   document.querySelector("#output").innerHTML
//      = "onchange event was trigger from the input box - <mark>"
//    +  document.querySelector("#fullname").value + "</mark> was entered."    
//    }
 
//  function setOutput2() {
//   document.querySelector("#output").innerHTML
//      = "onchange event was trigger from the Dropdone list - <mark>"
//    + document.querySelector("#colors").options[document.querySelector("#colors").selectedIndex].text
//    + "</mark> color was selected." 
//    }



//    window.onload = init;
//    function init() {
//    document.body.onresize = function() {
//     document.body.style.background = "yellow";
//    };
//    }
 

//    window.onbeforeunload = function () {
//     return "Are you sure you want to close this window?";
// }




