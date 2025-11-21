// Q2 - Task Scheduler: Micro vs Macro Challenge
// Demonstrates the execution order of microtasks and macrotasks in the JavaScript Event Loop

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");

console.log("End");

/*
Explanation:
1. "Start" logs immediately (synchronous)
2. setTimeout is registered as a macrotask in the task queue
3. Promise.resolve().then() registers a microtask in the microtask queue
4. "Synchronous log" executes immediately (synchronous)
5. "End" logs immediately (synchronous)
6. Event loop checks microtask queue before macrotask queue
7. Microtask "Promise callback" executes first
8. Macrotask "Timeout callback" executes last

Microtasks always execute before macrotasks in the same cycle of the event loop.
This is because the event loop prioritizes microtasks and drains the microtask queue
before moving on to the next macrotask.
*/