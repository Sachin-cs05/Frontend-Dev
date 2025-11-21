function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount percentage must be between 0 and 100");
    }
    return this.price * (1 - percent / 100);
};

const laptop = new Product("Gaming Laptop", 1200);
const phone = new Product("Smartphone", 800);
const headphones = new Product("Wireless Headphones", 200);

console.log(`${laptop.name}: Original Price: $${laptop.price}, Discounted Price: $${laptop.applyDiscount(15).toFixed(2)}`);
console.log(`${phone.name}: Original Price: $${phone.price}, Discounted Price: $${phone.applyDiscount(10).toFixed(2)}`);
console.log(`${headphones.name}: Original Price: $${headphones.price}, Discounted Price: $${headphones.applyDiscount(20).toFixed(2)}`);