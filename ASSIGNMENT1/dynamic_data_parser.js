const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

apiData.forEach((value, index) => {
    const numValue = Number(value);
    
    if (!isNaN(numValue) && isFinite(numValue)) {
        validNumbers.push({
            original: value,
            number: numValue,
            boolean: Boolean(value),
            string: String(value)
        });
    } else {
        invalidNumbers.push({
            original: value,
            number: numValue,
            boolean: Boolean(value),
            string: String(value)
        });
    }
});

console.log("=== Q1 - Dynamic Data Parser Report ===");
console.log("\nValid Numbers:");
validNumbers.forEach((item, index) => {
    console.log(`  ${index + 1}. Original: ${item.original} | Number: ${item.number} | Boolean: ${item.boolean} | String: "${item.string}"`);
});

console.log("\nInvalid Numbers:");
invalidNumbers.forEach((item, index) => {
    console.log(`  ${index + 1}. Original: ${item.original} | Number: ${item.number} | Boolean: ${item.boolean} | String: "${item.string}"`);
});