const products = {
  laptop: { price: 50000, stock: 5 },
  phone: { price: 20000, stock: 0 },
};


function selectProduct(product) {
  return new Promise((resolve) => {
    console.log(`Selecting ${product}...`);
    setTimeout(() => resolve(product), 1000);
  });
}

function checkInventory(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking inventory for ${product}...`);
    setTimeout(() => {
      if (products[product] && products[product].stock > 0) {
        resolve(product);
      } else {
        reject("Out of stock!");
      }
    }, 1000);
  });
}

function processPayment(product) {
  return new Promise((resolve) => {
    console.log("Processing payment...");
    setTimeout(() => resolve(product), 1000);
  });
}

function confirmOrder(product) {
  console.log(`Order confirmed for ${product}. ✅`);
}

// Using Promises (clean)
selectProduct("laptop")
  .then(checkInventory)
  .then(processPayment)
  .then(confirmOrder)
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Thank you for visiting our store!"));