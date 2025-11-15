const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotal = cart.reduce((total, item) => total + item.price, 0);

let discountedTotal = cart.reduce((total, item) => {
    let discountedPrice = item.price;
    
    if (item.category === "electronics") {
        discountedPrice = item.price * 0.9; // 10% discount
    } else if (item.category === "fashion") {
        discountedPrice = item.price * 0.95; // 5% discount
    }
    
    return total + discountedPrice;
}, 0);

let finalTotal = discountedTotal;
if (subtotal > 50000) {
    finalTotal = discountedTotal * 0.95; // Extra 5% overall discount
}

console.log("Cart items:");
cart.forEach(item => {
    console.log(`${item.item}: ${item.price}`);
});
console.log(`Subtotal: ${subtotal}`);
console.log(`Total after discounts: ${finalTotal.toFixed(2)}`);