/* initialize variables */
let cart = [];
let currGlazing;
let currSize;
let currPrice;

let basePrice = 2.49;
let currentGlazingPrice = 0; // keep original
let currentPackPrice = 1; // 1

/* initialize cinnamon roll class */
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

/* update product.html based on roll type */
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
// update page title
document.getElementById("banner").innerHTML = rollType + ' Cinnamon Roll';
// update image
const productImageElement = document.querySelector('.product-image');
productImageElement.src = "images/products/" + rolls[rollType].imageFile;
// update base price
basePrice = rolls[rollType].basePrice;


/* initialize glazing */
const glazingPrices = {
	"Keep original": 0.0,
	"Sugar milk": 0.0,
	"Vanilla milk": 0.50,
	"Double chocolate": 1.50
};

const packPrices = {
	"1": 1, "3": 3, "6": 5, "12": 10
};

/* Populate glazing options with corresponding price adaptation values */
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = glazing;
	option.value = price;
	glazingSelect.appendChild(option);
}

/* Populate pack options with corresponding price adaptation values */
const packSelect = document.querySelector("select#pack-options");

for (const [pack, price] of Object.entries(packPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	packSelect.appendChild(option);
}

/* Record the current glazing option and update the total price */
function glazingChange(element) {
	currentGlazingPrice = parseFloat(element.value);
	updateTotalPrice();
  // update current glazing choice
  let glazeText= element.options[element.selectedIndex].text;
  currGlazing = glazeText;
}


/* Record the current pack option and update the total price */
function packChange(element) {
	currentPackPrice = parseFloat(element.value);
	updateTotalPrice();
  //update current pack size
  let packText= element.options[element.selectedIndex].text;
  currSize = packText;
}

function updateTotalPrice() {
	const totalPrice = (basePrice + currentGlazingPrice) * currentPackPrice;
	const totalPriceField = document.querySelector("#add-cart span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
  currPrice = totalPrice.toFixed(2);
}

/* update cart */
function updateCart(event) {
  const addOrder = new Roll(rollType, currGlazing, currSize,currPrice);
  cart.push(addOrder);
  console.log(cart);
}
document.querySelector('#add-cart span').addEventListener('click',updateCart);
