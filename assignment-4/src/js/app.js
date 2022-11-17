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
 *      Name:       Zhifen Li
 *      Student ID: 168833218
 *      Date:       2022-11-18
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
    ele.innerText = cat.description;
    ele.classList = "nav-item"
    ele.id = cat.id
    nav.appendChild(ele);
  });
}

//add table header
// function addTableHeader(){
//   const header = document.getElementsByTagName("thead")[0];
//   header.innerHTML = "";
//   const row = header.insertRow(0);
//   const cell1 = row.insertCell(0);
//   cell1.innerHTML = "<b>Name</b>";
//   const cell2 = row.insertCell(1);
//   cell2.innerHTML = "<b>Description</b>";
//   const cell3 = row.insertCell(2);
//   cell3.innerHTML = "<b>Price</b>";
// }

function addTableHeader(){
  const header = document.getElementsByTagName("thead")[0];
  header.innerHTML = ""
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerHTML = "<b>Name</b>";
  const td2 = document.createElement("td");
  td2.innerHTML = "<b>Description</b>";
  const td3 = document.createElement("td");
  td3.innerHTML = "<b>Price</b>";
  tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    header.appendChild(tr);
} 

function addTitle(id){
  const ele = _id(id);
  const categoryProducts = products.filter(product => product.categories == id && product.discontinued != true );
  let description;
  for(let c of categories){
    if(c.id == id){
       description = c.description
    }
  }
  ele.addEventListener("click", () => {
    showTitle(description);
    addTableHeader();
    addTable(categoryProducts);
  });
}

function showTitle(description){
  const ele = _id("category");
  ele.innerHTML = "";
  ele.innerText = description;
}

function addTable(productList){
  const tbody = _id("products");
  tbody.innerHTML = "";

  for(let p of productList){
    const tr = document.createElement("tr");
    tr.id = p.id;
    tr.addEventListener("click", ()=> {console.log(p.name)});
    const td1 = document.createElement("td");
    td1.innerText = p.name;

    const td2 = document.createElement("td");
    td2.innerText = p.description;

    const td3 = document.createElement("td");
    priceText = `$${p.price}`
    td3.innerText = priceText; 

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
}


function main() {
  // For debugging, display all of our data in the console
  // You can remove this once you start working...
  const something = { products: products, categories };

  console.log(something, "Store Data");

  showNavigation();

  addTitle("c1");
  addTitle("c2");
  addTitle("c3");
  addTitle("c4");

}

addEventListener("DOMContentLoaded", main);
