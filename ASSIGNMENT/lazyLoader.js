function loadProfile() { 
    return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); 
}

function loadPosts() { 
    return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); 
}

function loadMessages() { 
    return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); 
}

function loadWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to load"));
        }, 1200);
    });
}

async function loadDashboard() {
    const startTime = Date.now();
    
    console.log("Starting to load dashboard modules...");
    
    const modulePromises = [
        loadProfile(),
        loadPosts(),
        loadMessages()
    ];
    
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        modulePromises[0] = loadWithError();
    } else if (randomIndex === 1) {
        modulePromises[1] = loadWithError();
    } else {
        modulePromises[2] = loadWithError();
    }
    
    try {
        const results = await Promise.allSettled(modulePromises);
        
        const endTime = Date.now();
        const totalTime = (endTime - startTime) / 1000;
        
        console.log("\n=== Dashboard Loading Results ===");
        
        results.forEach((result, index) => {
            const moduleName = ["Profile", "Posts", "Messages"][index];
            
            if (result.status === "fulfilled") {
                console.log(`✓ ${moduleName}: ${result.value}`);
            } else {
                console.log(`✗ ${moduleName}: ${result.reason.message}`);
            }
        });
        
        console.log(`\nTotal loading time: ${totalTime.toFixed(2)} seconds`);
        
    } catch (error) {
        console.error("Unexpected error:", error.message);
    }
}

loadDashboard();