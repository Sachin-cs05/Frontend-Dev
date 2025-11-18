class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    this.price = this.price - (this.price * discountPercent / 100);
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 1500, "Electronics"),
  new Product(2, "Phone", 800, "Electronics"),
  new Product(3, "Book", 25, "Education"),
  new Product(4, "Desk", 1200, "Furniture"),
  new Product(5, "Chair", 300, "Furniture")
];

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products with price > $1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));