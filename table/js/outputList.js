var myList = ["Apples", "Oranges", "Pears", "Bananas"];

window.onload = function(){
      var listContainer = document.getElementById("outputList");

      var myListString = "<ul>"; // opening <ul>

      for(var i=0; i < myList.length; i++){ // list items <li></li>
            myListString += "<li>" + myList[i] + "</li>"
      }

      myListString += "</ul>"; // closing </ul>

      listContainer.innerHTML = myListString;
};


// window.onload = function(){
//     var ListContainer = document.querySelector("#outputList");
//     var myListString = "<ol>";
//     for(let i=0; i<myList.length; i++){
//         myListString += "<li>" + myList[i] + "</li>"
//     }
//     myListString += "</ol>";
//     ListContainer.innerHTML= myListString;
// };



// const node= document.createElement("li");
//     const textNode = document.createTextNode("Peach");
//     node.appendChild(textNode);
//     myListString.appendChild(node);
