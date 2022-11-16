/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function _id(id) {
  return document.getElementById(id);
}

function _class(className) {
  return document.getElementsByClassName(className);
}

function showNavigation(){
  const nav = _id("category-menu");
  categories.forEach(cat => {
    const ele = document.createElement("span");
    ele.innerHTML = cat.description;
    ele.classList = "nav-item"
    ele.id = cat.id
    nav.appendChild(ele);
  });
}

//add table header
function addTableHeader(){
  const header = document.getElementsByTagName("thead")[0];
  const row = header.insertRow(0);
  const cell1 = row.insertCell(0);
  cell1.innerHTML = "<b>Name</b>";
  const cell2 = row.insertCell(1);
  cell2.innerHTML = "<b>Description</b>";
  const cell3 = row.insertCell(2);
  cell3.innerHTML = "<b>Price</b>";
}

//add c1 title and content
function showC1Title(){
  const ele = document.getElementById("category");
  ele.innerHTML = "";
  //ele.appendChild(ele)
  ele.innerText = categories[0].description;
}
function addC1Title(){
  const ele = document.getElementById("c1");
  ele.addEventListener("click", showC1Title);
  ele.addEventListener("click", addTableHeader)
}

function addTable1(){
  const tbody = document.getElementById("products");
  const tr1 = document.createElement(tr);
  tbody.appendChild(tr1);
  const td1 = document.createElement(td);
  tbody.appendChild(td1);

  
}


//add c2 title and content
function showC2Title(){
  const ele = document.getElementById("category");
  ele.innerHTML = "";
  //ele.appendChild(ele)
  ele.innerText = categories[1].description;
}
function addC2Title(){
  const ele = document.getElementById("c2");
  ele.addEventListener("click", showC2Title);
}
//add c3 title and content
function showC3Title(){
  const ele = document.getElementById("category");
  ele.innerHTML = "";
  //ele.appendChild(ele)
  ele.innerText = categories[2].description;
}
function addC3Title(){
  const ele = document.getElementById("c3");
  ele.addEventListener("click", showC3Title);
}

//add c4 title and content
function showC4Title(){
  const ele = document.getElementById("category");
  ele.innerHTML = "";
  //ele.appendChild(ele)
  ele.innerText = categories[3].description;
}
function addC4Title(){
  const ele = document.getElementById("c4");
  ele.addEventListener("click", showC4Title);
}

function main() {
  // For debugging, display all of our data in the console
  // You can remove this once you start working...
  const something = { products: products, categories };

  console.log(something, "Store Data");

  showNavigation();
  addC1Title();
  addC2Title();
  addC3Title();
  addC4Title();
}

addEventListener("DOMContentLoaded", main);
