console.log("=== Callback Hell Implementation ===");
setTimeout(() => {
    console.log("1. Design completed");
    setTimeout(() => {
        console.log("2. Build completed");
        setTimeout(() => {
            console.log("3. Test completed");
            setTimeout(() => {
                console.log("4. Deploy completed");
                setTimeout(() => {
                    console.log("5. Celebrate!");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

function design() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Design completed");
            resolve();
        }, 1000);
    });
}

function build() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2. Build completed");
            resolve();
        }, 1000);
    });
}

function test() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3. Test completed");
            resolve();
        }, 1000);
    });
}

function deploy() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("4. Deploy completed");
            resolve();
        }, 1000);
    });
}

function celebrate() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("5. Celebrate!");
            resolve();
        }, 1000);
    });
}

async function buildPipeline() {
    console.log("\n=== Async/Await Implementation ===");
    try {
        await design();
        await build();
        await test();
        await deploy();
        await celebrate();
        console.log("Build pipeline completed!");
    } catch (error) {
        console.error("Build pipeline failed:", error.message);
    }
}

setTimeout(buildPipeline, 6000);