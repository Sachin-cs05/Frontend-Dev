function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

function getBugs() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.2;
        
        if (shouldFail) {
            reject(new Error("Failed to fetch bugs from API"));
        } else {
            setTimeout(() => {
                const bugs = ["UI glitch", "API timeout", "Login failure"];
                resolve(bugs);
            }, 1000);
        }
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });