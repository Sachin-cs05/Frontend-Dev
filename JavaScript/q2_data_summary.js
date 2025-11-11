const name = "Alice";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "swimming", "coding"];
const address = { street: "123 Main St", city: "New York" };
const emptyValue = null;
let unknownValue;

const dataReport = [
    { Label: "name", Value: name, Type: typeof name },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "address", Value: address, Type: typeof address },
    { Label: "emptyValue", Value: emptyValue, Type: typeof emptyValue },
    { Label: "unknownValue", Value: unknownValue, Type: typeof unknownValue }
];

console.table(dataReport);