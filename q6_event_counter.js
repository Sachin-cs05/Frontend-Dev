let count = 0;

function increment() {
    count++;
    console.log(`Incremented count: ${count}`);
    
    function showIncrementScope() {
        console.log(`In increment scope, count is: ${count}`);
    }
    showIncrementScope();
}

function decrement() {
    count--;
    console.log(`Decremented count: ${count}`);
    
    function showDecrementScope() {
        console.log(`In decrement scope, count is: ${count}`);
    }
    showDecrementScope();
}

console.log(`Initial count: ${count}`);
increment();
increment();
decrement();
increment();
decrement();
decrement();