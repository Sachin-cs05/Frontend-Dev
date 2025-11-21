function submitOrder() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.5;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Order submission failed"));
            } else {
                resolve("Order submitted successfully");
            }
        }, 500);
    });
}

async function processOrder() {
    const maxRetries = 3;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Submitting order...`);
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed - ${error.message}`);
            
            if (attempt === maxRetries) {
                throw new Error("Order could not be processed");
            }
            
            const delay = Math.pow(2, attempt - 1) * 1000;
            console.log(`Waiting ${delay/1000}s before retrying...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

processOrder()
    .then(result => {
        console.log("\nOrder processing completed successfully!");
    })
    .catch(error => {
        console.error("\nFinal result:", error.message);
    });