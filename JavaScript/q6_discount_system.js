const totalPurchase = 7500;

let discountPercentage;
if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = (totalPurchase * discountPercentage) / 100;
const finalPrice = totalPurchase - discountAmount;

console.log(`Original Total: $${totalPurchase}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Final Price: $${Math.round(finalPrice)}`);