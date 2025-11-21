async function fetchProducts() {
    try {
        console.log("Fetching products...");
        
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const products = await response.json();
        
        console.log("Products fetched successfully!\n");
        
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("---");
        });
        
        createProductCards(products);
        
    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error("Error details:", error.message);
    }
}

function createProductCards(products) {
    if (typeof document === 'undefined') {
        console.log("\nBonus: HTML product cards would be created here (browser only)");
        return;
    }
    
    const container = document.createElement('div');
    container.id = 'product-container';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.padding = '20px';
    
    products.slice(0, 5).forEach(product => {
        const card = document.createElement('div');
        card.style.border = '1px solid #ddd';
        card.style.borderRadius = '8px';
        card.style.margin = '10px';
        card.style.padding = '15px';
        card.style.width = '200px';
        card.style.textAlign = 'center';
        card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.style.maxWidth = '100%';
        img.style.height = '150px';
        img.style.objectFit = 'cover';
        
        const title = document.createElement('h3');
        title.textContent = product.title.substring(0, 30) + (product.title.length > 30 ? '...' : '');
        title.style.fontSize = '14px';
        title.style.margin = '10px 0';
        
        const price = document.createElement('p');
        price.textContent = `$${product.price}`;
        price.style.fontWeight = 'bold';
        price.style.color = '#e91e63';
        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        
        container.appendChild(card);
    });
    
    document.body.appendChild(container);
    console.log("\nHTML product cards created and appended to the page!");
}

fetchProducts();