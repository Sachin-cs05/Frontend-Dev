function serverA() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Server A failed"));
            } else {
                resolve("Server A response");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.1;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Server B failed"));
            } else {
                resolve("Server B response");
            }
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log("Results:", results);
    })
    .catch(error => {
        console.error("Deployment failed:", error.message);
    });

Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.error("Race failed:", error.message);
    });