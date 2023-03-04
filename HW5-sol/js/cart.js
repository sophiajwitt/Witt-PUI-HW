// creating default rolls
const rollOne = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const rollTwo = new Roll ('Walnut', 'Vanilla Milk', 12, 3.49);
const rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const rollFour = new Roll('Apple', 'Original', 3, 3.49);

/* initialize cart */
let cartInit = new set();

/* push initial rolls to cart */
cartInit.push(rollOne);
cartInit.push(rollTwo);
cartInit.push(rollThree);
cartInit.push(rollFour);

console.log(cartInit);

function updateRoll(item) {
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
    priceText.innerText = "$" + item.priceUpdated;
}

function initializeCart(item) {
    const template = document.getElementByID('cart-item-template');
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
    for (let rollVar in cartInit) {
        priceValue = (Number(calculateTotalPrice) + Number(rollVar.currentPrice)).toFixed(2);
    }
    priceTotal.innerText = '$' + priceValue;
}

for (let item of cart) {
    initializeCart(item);
}

