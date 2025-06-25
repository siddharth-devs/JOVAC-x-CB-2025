// Product data (20 sample products)
const products = [
  { id: 1, name: "Laptop", price: 850, inStock: true, category: "electronics" },

  { id: 2, name: "Shirt", price: 450, inStock: true, category: "clothing" },

  { id: 3, name: "Mobile", price: 1200, inStock: false, category: "electronics" },

  { id: 4, name: "Jeans", price: 700, inStock: true, category: "clothing" },

  { id: 5, name: "Headphones", price: 350, inStock: true, category: "electronics" },

  { id: 6, name: "Jacket", price: 950, inStock: false, category: "clothing" },

  { id: 7, name: "Monitor", price: 1100, inStock: true, category: "electronics" },

  { id: 8, name: "T-Shirt", price: 300, inStock: true, category: "clothing" },

  { id: 9, name: "Tablet", price: 990, inStock: true, category: "electronics" },

  { id: 10, name: "Cap", price: 150, inStock: false, category: "clothing" },

  { id: 11, name: "Keyboard", price: 600, inStock: true, category: "electronics" },

  { id: 12, name: "Shoes", price: 750, inStock: true, category: "clothing" },

  { id: 13, name: "Charger", price: 200, inStock: false, category: "electronics" },

  { id: 14, name: "Kurta", price: 550, inStock: true, category: "clothing" },

  { id: 15, name: "Speakers", price: 850, inStock: true, category: "electronics" },

  { id: 16, name: "Watch", price: 1300, inStock: false, category: "electronics" },

  { id: 17, name: "Sunglasses", price: 400, inStock: true, category: "clothing" },

  { id: 18, name: "Mouse", price: 300, inStock: true, category: "electronics" },

  { id: 19, name: "Sweater", price: 650, inStock: true, category: "clothing" },

  { id: 20, name: "Camera", price: 2200, inStock: true, category: "electronics" },
];

// Step 1: Filter products that are in stock and cost more than ₹500
const filtered = products.filter(product => product.inStock && product.price > 500);

// Step 2: Add 18% GST using map()
const withGST = filtered.map(product => ({
  ...product,
  priceWithGST: +(product.price * 1.18).toFixed(2)
}));

// Step 3: Calculate total value using reduce()
const totalValue = withGST.reduce((sum, product) => sum + product.priceWithGST, 0);

// Output the results
console.log("=== Filtered Products (> ₹500 and in stock) ===");
console.table(filtered);

console.log("=== Products with GST (18%) ===");
console.table(withGST);

console.log(` Total Value After GST: ₹${totalValue.toFixed(2)}`);