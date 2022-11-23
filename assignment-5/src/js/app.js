/**
 * WEB222 – Assignment 05
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
 *      Date:       2022-11-27
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function _id(id) {
  return document.getElementById(id);
}

function showNavigation() {
  const nav = _id("category-menu");
  categories.forEach((cat) => {
    const ele = document.createElement("button");
    ele.innerText = cat.description;
    ele.classList = "nav-item";
    ele.id = cat.id;
    nav.appendChild(ele);
  });
}

function addTitle(id) {
  const ele = _id(id);
  const categoryProducts = products.filter(
    (product) => product.categories === id
  );
  let description;
  for (let c of categories) {
    if (c.id === id) {
      description = c.description;
    }
  }
  ele.addEventListener("click", () => {
    showTitle(description);
    createProductCards(categoryProducts);
  });
}

function showTitle(description) {
  const ele = _id("category");
  ele.innerHTML = "";
  ele.innerText = description;
}

function createProductCard(product) {
  const h = document.createElement('h2');
  h.classList = "name-item";
  h.innerText = product.name;

  const img = document.createElement('img');
  img.classList = "img-item";
  img.src = product.imageUrl;
  const imgDescription = document.createElement('p');
  imgDescription.classList = "img-description";
  imgDescription.innerText = product.description;

  const pPrice = document.createElement('span');
  pPrice.classList = "price-item";
  const pStri = new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(product.price);
  pPrice.innerText = pStri;

  const card = document.createElement('div');
  card.classList = "card";
  card.appendChild(h);
  card.appendChild(img);
  card.appendChild(imgDescription);
  card.appendChild(pPrice);

  return card;
}

function createProductCards(productsList) {
  const container = _id("card_container");
  container.innerHTML = "";

  // productsList.forEach((p) => {
  //   const cardElem = createProductCard(p);
  //   container.appendChild(cardElem);
  // });

  productsList
    .map(p => createProductCard(p))
    .forEach(card => container.appendChild(card));

  // productsList
  //   .map(createProductCard)
  //   .forEach(card => container.appendChild(card));
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
