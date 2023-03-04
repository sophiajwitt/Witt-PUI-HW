/* glazing and price dictionary */
const glazingPriceChanges = {
    'Keep Original': 0.00,
    'Sugar Milk': 0.00,
    'Vanilla Milk': 0.50,
    'Double Chocolate': 1.50,
  };
  
const packSizePriceChanges = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10,
  };

/* initialize cinnamon roll class */
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
      this.image =  "images/products/" + rolls[this.type]['imageFile'];
      this.priceUpdated = ((this.basePrice + glazingPriceChanges[this.glazing])*packSizePriceChanges[this.size]).toFixed(2);
    }
  }

// creating default rolls
const rollOne = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const rollTwo = new Roll ('Walnut', 'Vanilla Milk', 12, 3.49);
const rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const rollFour = new Roll('Apple', 'Original', 3, 3.49);

/* initialize cart */
let cartInit = new Set();

/* push initial rolls to cart */
cartInit.add(rollOne);
cartInit.add(rollTwo);
cartInit.add(rollThree);
cartInit.add(rollFour);

console.log(cartInit);

function updateRoll(item) {
    const rollImage = document.getElementById('cart-image');
    const rollTypeText = document.getElementById('roll-name');
    const glazingChoiceText = document.getElementById('glaze-name')
    const packSizeText = document.getElementById('pack-size-label')
    const priceText = document.querySelector('.item-price');
  
    rollImage.src = item.image;
    console.log(item.type);
    rollTypeText.innerText = item.type + ' Cinnamon Roll';
    glazingChoiceText.innerText = "Glazing: " + item.glazing;
    packSizeText.innerText = "Pack Size: " + item.size;
    priceText.innerText = "$" + item.priceUpdated;
}

function initializeCart(item) {
    const template = document.getElementById('cart-item-template');
    const clone = template.content.cloneNode(true);
    item.element = clone.querySelector('.cart-item');
    console.log(item.element);
    const cartItems = document.querySelector('.cart-wrapper');
    cartItems.prepend(item.element);
    updateRoll(item);
    const removeButton = document.querySelector('.remove');
    removeButton.addEventListener('click', () => {removeElement(item)});
    updatePriceTotal();
}

function removeElement(item) {
    item.element.remove();
    cartInit.delete(item);
    console.log(cartInit.size);
    updatePriceTotal();
}

function updatePriceTotal() {
    let priceTotal = document.querySelector('.total-price');
    let priceValue = 0;
    for (let rollVar of cartInit) {
        priceValue = (Number(priceValue) + Number(rollVar.currentPrice)).toFixed(2);
    }
    priceTotal.innerText = '$' + priceValue;
}

for (let item of cartInit) {
    initializeCart(item);
}

