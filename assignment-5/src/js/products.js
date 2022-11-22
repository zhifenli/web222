/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    name: "Earl Grey",
    description: "Luxurious black tea is a true classic.",
    price: 9.99,
    discontinued: false,
    categories: "c1",
    imageUrl: "img/mille1.jpeg"
  },
  {
    id: "P2",
    name: "Cheese",
    description: "Cheesy with a balance of sweetness.",
    price: 10.99,
    discontinued: false,
    categories: "c1",
    imageUrl: "img/Tiramisuy_mille.jpeg"
  },
  {
    id: "P3",
    name: "Sea Salt Caramel",
    description: "Extra richness & creaminess of custard and burnt sugar.",
    price: 8.99,
    discontinued: false,
    categories: "c1",
    imageUrl: "img/mille1.jpeg"
  },
  {
    id: "P4",
    name: "Tiramisuy",
    description: "Coffee lovers rejoice.",
    price: 9.99,
    discontinued: false,
    categories: "c1",
    imageUrl: "img/Tiramisuy_mille.jpeg"
  },
  {
    id: "P5",
    name: "Oreo",
    description: "Creamy and delectable.",
    price: 10.99,
    discontinued: false,
    categories: "c1",
    imageUrl: "img/Mango-Cupcakes_400x394.jpeg"
  },
  {
    id: "P6",
    name: "Matcha",
    description: "Earthy, green taste and aroma.",
    price: 11.99,
    discontinued: true,
    categories: "c1",
    imageUrl: "img/Tiramisuy_mille.jpeg"
  },
  {
    id: "P7",
    name: "Shredded Pork Cake Cup",
    description: "An unusual combination that’s oh-so-right.",
    price: 12.99,
    discontinued: true,
    categories: "c2",
    imageUrl: "img/Taro-cupcake_398x409.jpeg"
  },
  {
    id: "P8",
    name: "Mango Cake Cup",
    description: "Cross culture of Southeast Asian flavours.",
    price: 15.99,
    discontinued: false,
    categories: "c2",
    imageUrl: "img/Mango-Cupcakes_400x394.jpeg"
  },
  {
    id: "P9",
    name: "Taro Custard",
    description: "Mildly sweet taro with savoury pork floss.",
    price: 12.99,
    discontinued: false,
    categories: "c2",
    imageUrl: "img/chocolate-cupcakes.jpeg"
  },
  {
    id: "P10",
    name: "Chocolate Cake Cup",
    description: "Chocolatey, malty, and yummy all in one.",
    price: 11.99,
    discontinued: false,
    categories: "c2",
    imageUrl: "img/Mango-Cupcakes_400x394.jpeg"
  },
  {
    id: "P11",
    name: "Soya Bean Cream Cake",
    description: "Cozy and indulgent Asian flavours.",
    price: 12.99,
    discontinued: true,
    categories: "c3",
    imageUrl: "img/cake2.jpeg"
  },
  {
    id: "P12",
    name: "Earl Grey Cake",
    description: "Yummy indulgent favorite",
    price: 9.99,
    discontinued: false,
    categories: "c3",
    imageUrl: "img/birthdaycake.jpeg"
  },
  {
    id: "P13",
    name: "Chestnut Cake",
    description: "Luxurious black tea is a true classic.",
    price: 9.99,
    discontinued: false,
    categories: "c3",
    imageUrl: "img/cake1.jpeg"
  },
  {
    id: "P14",
    name: "Earl Grey",
    description: "Nutty and toasted.",
    price: 9.99,
    discontinued: true,
    categories: "c3",
    imageUrl: "img/birthday_1_res_400x411.jpeg"
  },
  {
    id: "P15",
    name: "Mango Cake",
    description: "Fresh mangoes only.",
    price: 9.99,
    discontinued: false,
    categories: "c3",
    imageUrl: "img/cake1.jpeg"
  },
  {
    id: "P16",
    name: "Pokemon Birthday Cake",
    description: "For boy's birthday",
    price: 129.99,
    discontinued: false,
    categories: "c4",
    imageUrl: "img/Rustic-Wedding-Cake-Mad-About-Cakes (1).jpg"
  },
  {
    id: "P17",
    name: "Pink Bow Birthday Cake",
    description: "A perfect birthday cake for your girl friend",
    price: 119.99,
    discontinued: false,
    categories: "c4",
    imageUrl: "img/cake1.jpeg"
  },
  {
    id: "P18",
    name: "Elsa Birthday Bake",
    description: "For every girl who has a prince dream",
    price: 109.99,
    discontinued: false,
    categories: "c4",
    imageUrl: "img/birthdaycake.jpeg"
  },
  {
    id: "P19",
    name: "Car Birthday Cake",
    description: "Best gift for your boy friend's birthday.",
    price: 129.99,
    discontinued: false,
    categories: "c4",
    imageUrl: "img/Rustic-Wedding-Cake-Mad-About-Cakes (1).jpg"
  },
  {
    id: "P20",
    name: "Flower Birthday Cake",
    description: "A beautiful flower cak",
    price: 129.99,
    discontinued: true,
    categories: "c4",
    imageUrl: "img/birthday_1_res_400x411.jpeg"
  }
];
