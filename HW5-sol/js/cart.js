// creating default rolls
const rollOne = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const rollTwo = new Roll ('Walnut', 'Vanilla Milk', 12, 3.49);
const rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const rollFour = new Roll('Apple', 'Original', 3, 3.49);

cart.push(rollOne);
cart.push(rollTwo);
cart.push(rollThree);
cart.push(rollFour);

console.log(cart);

function addElement(item) {
    const rollImage = document.querySelector('.product-image');
    const rollTypeText = document.getElementById('roll-name');
    const glazingChoiceText = document.getElementById('glazing-name')
    const packSizeText = document.getElementById('pack-size-label')
    const priceText = document.querySelector('.item-price');
  
    rollImage.src = item.image;
    console.log(item.type);
    rollTypeText.innerText = item.type + ' Cinnamon Roll';
    glazingChoiceText.innerText = "Glazing: " + item.glazing;
    packSizeText.innerText = "Pack Size: " + item.size;
    priceText.innerText = "$" + item.currentPrice;
}

function initializeCart(item) {
    const template = document.getElementByID('cart-item-template');
    const clone = template.content.cloneNode(true);
    item.element = clone.querySelector('.cart-item');
    console.log(item.element);
    const cartItems = document.querySelector('.cart-wrapper');
    cartItems.append(item.element);
}

for (let item of cart) {
    console.log(item);
    initializeCart(item);
}

