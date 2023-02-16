// A list of all glaze options and pricing
let glazingOptions = [
    {
      glaze: 'Keep original',
      price: 0,
    },
    {
      glaze: 'Sugar milk',
      price: 0,
    },
    {
      glaze: 'Vanilla milk',
      price: 0.5,
    },
    {
      glaze: 'Double chocolate',
      price: 1, 
    }
  ];

// A list of all pack options and pricing
let packOptions = [
    {
      size: '1',
      price: 1, 
    },
    {
      size: '3',
      price: 3, 
    },
    {
      size: '6',
      price: 5, 
    },
    {
      size: '12',
      price: 10,
    }
  ]; 
  
// retriving glaze and price from selection
var selectGlaze = document.getElementbyId("glazingOptions");
for (i in glazingOptions) {
  selectGlaze.options[selectGlaze.options.length] = new Option(glazingOptions[i].glaze,glazingOptions[i].price)
}

// retriving size and price from selection
var selectSize = document.getElementbyId("packOptions");
for (i in packOptions) {
  selectSize.options[selectSize.options.length] = new Option(packOptions[i].size, packOptions[i].price)
}

let currPrice = document.getElementbyId('total');
var basePrice = 2.49;
var glazingPrice = 0;
var packPrice = 1;
currPrice.innertext = (basePrice + glazingPrice) * packPrice;

function glazingChange(element) {
  const priceChangeGlaze = parseFloat(element.value);
  glazingPrice = priceChangeGlaze;
  currPrice.innertext = (basePrice + glazingPrice) * packPrice;
}

function packChange(element) {
  const priceChangePack = parseFloat(element.value);
  packPrice = priceChangePack;
  currPrice.innertext = (basePrice + glazingPrice) * packPrice;
}

currPrice.innertext = (basePrice + glazingPrice) * packPrice;
