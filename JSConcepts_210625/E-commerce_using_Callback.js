const products = {
  laptop: { price: 50000, stock: 5 },
  phone: { price: 20000, stock: 0 },
};

//Using Callback:

function selectProduct(product, callback) {
  console.log(`Selecting ${product}...`);
  setTimeout(() => callback(product), 1000);
}

function checkInventory(product, callback, errorCallback) {
  console.log(`Checking inventory for ${product}...`);
  setTimeout(() => {
    if (products[product] && products[product].stock > 0) {
      callback(product);
    } else {
      errorCallback("Out of stock!");
    }
  }, 1000);
}

function processPayment(product, callback) {
  console.log("Processing payment...");
  setTimeout(() => callback(product), 1000);
}

function confirmOrder(product) {
  console.log(`Order confirmed for ${product}. ✅`);
}

// Callback Hell in action
selectProduct("laptop", (product) => {
  checkInventory(product, (product) => {
    processPayment(product, (product) => {
      confirmOrder(product);
    });
  }, (err) => {
    console.log("Error:", err);
  });
});