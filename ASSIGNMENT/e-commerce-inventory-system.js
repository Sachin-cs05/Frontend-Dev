const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 15 },
    { id: 2, name: "Phone", category: "Electronics", price: 800, stock: 30 },
    { id: 3, name: "Shirt", category: "Clothing", price: 25, stock: 50 },
    { id: 4, name: "Jeans", category: "Clothing", price: 45, stock: 25 },
    { id: 5, name: "Book", category: "Education", price: 15, stock: 5 },
    { id: 6, name: "Desk", category: "Furniture", price: 200, stock: 8 }
];

function getLowStockProducts(products) {
    return products.filter(product => product.stock < 10);
}

function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + (product.price * product.stock), 0);
}

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.log(getLowStockProducts(products));

console.log("\nProducts Sorted by Price:");
console.log(sortProductsByPrice(products));

console.log("\nTotal Inventory Value:");
console.log(`$${calculateTotalInventoryValue(products)}`);

console.log("\nProducts Grouped by Category:");
console.log(groupByCategory(products));