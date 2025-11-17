const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validEntries = [];
const errorLog = [];

rawData.forEach((entry, index) => {
    try {
        const parsed = JSON.parse(entry);
        
        if (parsed.user === undefined) {
            throw new Error(`Missing 'user' key`);
        }
        
        if (parsed.age === undefined) {
            throw new Error(`Missing 'age' key`);
        }
        
        const ageNum = Number(parsed.age);
        if (isNaN(ageNum)) {
            throw new Error(`Invalid age value: ${parsed.age}`);
        }
        
        validEntries.push({
            ...parsed,
            age: ageNum
        });
    } catch (error) {
        errorLog.push({
            line: index + 1,
            data: entry,
            error: error.message
        });
    }
});

console.log("\nValid Entries:");
validEntries.forEach((entry, index) => {
    console.log(`  ${index + 1}. User: ${entry.user}, Age: ${entry.age}`);
});

console.log("\nError Log:");
errorLog.forEach((error, index) => {
    console.log(`  ${index + 1}. Line ${error.line}: ${error.error}`);
    console.log(`      Data: ${error.data}`);
});

console.log("\nUsers 18 and older:");
const adults = validEntries.filter(person => person.age >= 18);
adults.forEach(person => {
    console.log(`  - ${person.user}, Age: ${person.age}`);
});