function boilWater() {
    return new Promise((resolve, reject) => {
        const time = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        console.log("Starting to boil water...");
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to boil water!"));
            } else {
                console.log("Water boiled!");
                resolve();
            }
        }, time);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const time = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        console.log("Brewing coffee...");
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to brew coffee!"));
            } else {
                console.log("Coffee brewed!");
                resolve();
            }
        }, time);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const time = 1000 + Math.random() * 1000;
        const shouldFail = Math.random() < 0.1;
        
        console.log("Pouring coffee into cup...");
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to pour coffee!"));
            } else {
                console.log("Coffee poured!");
                resolve();
            }
        }, time);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Error making coffee:", error.message));