const menu = [
    { name: "Pizza", price: 12.99 },
    { name: "Burger", price: 8.99 },
    { name: "Salad", price: 7.99 },
    { name: "Pasta", price: 10.99 }
];

function calculateBill(orderItems) {
    try {
        const invalidItems = orderItems.filter(item => 
            !menu.find(menuItem => menuItem.name === item));
        
        if (invalidItems.length > 0) {
            throw new Error(`Invalid items ordered: ${invalidItems.join(', ')}`);
        }

        const prices = orderItems.map(item => 
            menu.find(menuItem => menuItem.name === item).price);

        const total = prices.reduce((sum, price) => sum + price, 0);
        
        return total;
    } catch (error) {
        throw new Error(`Order Error: ${error.message}`);
    }
}

try {
    const order1 = ["Pizza", "Burger", "Salad"];
    console.log(`Order Total: $${calculateBill(order1).toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}

try {
    const order2 = ["Pizza", "Sushi"];
    console.log(`Order Total: $${calculateBill(order2).toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}