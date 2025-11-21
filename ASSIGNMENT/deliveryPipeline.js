function takeOrder() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Restaurant busy - order rejected"));
            } else {
                console.log("Step 1: Order taken");
                resolve("Order confirmed");
            }
        }, delay);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Kitchen equipment malfunction"));
            } else {
                console.log("Step 2: Food prepared");
                resolve("Food ready");
            }
        }, delay);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Packaging materials unavailable"));
            } else {
                console.log("Step 3: Package ready");
                resolve("Package sealed");
            }
        }, delay);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("No delivery personnel available"));
            } else {
                console.log("Step 4: Out for delivery");
                resolve("On the way");
            }
        }, delay);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Delivery address not found"));
            } else {
                console.log("Delivery completed!");
                resolve("Delivered successfully");
            }
        }, delay);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");
        
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
        
        console.log("All steps completed successfully!");
        
    } catch (error) {
        console.error("Pipeline failed!");
        console.error("Reason:", error.message);
    }
}

runPipeline();