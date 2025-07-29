
let products = [
  { id: 1, name: "Laptop", price: 1200, quantity: 2 },
  { id: 2, name: "Phone", price: 800, quantity: 0 },
  { id: 3, name: "Headphones", price: 150, quantity: 4 },
  { id: 4, name: "Monitor", price: 300, quantity: 1 },
];
let availableProducts = products.filter(product => product.quantity > 0);
console.log(" Available Products:", availableProducts);
let totalCartValue = availableProducts.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);
console.log("Total Cart Value: $" + totalCartValue);
let removedProductList = products.slice();
removedProductList.splice(1, 1);
console.log("Product List after Removal:", removedProductList);
let updatedProducts = [...products];
updatedProducts[0] = { ...updatedProducts[0], quantity: 5 }; 
console.log("Updated Product List:", updatedProducts);
let productTemplate = {
  id: 5,
  name: "Keyboard",
  price: 100,
  quantity: 3,
  printDetails() {
    console.log(`Product: ${this.name} | Price: $${this.price} | Quantity: ${this.quantity}`);
  }
};

productTemplate.printDetails(); 
let { name, price, quantity } = updatedProducts[0]; 
console.log(`Selected Item: ${name} | Price: $${price} | Qty: ${quantity}`);
