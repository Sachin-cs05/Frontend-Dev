let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(' ').length;

let hasNegativeWords = feedback.includes("bad") || feedback.includes("poor");

if (!hasNegativeWords) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);