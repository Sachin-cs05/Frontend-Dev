let productName = " wireless headphones PRO ";

let trimmedName = productName.trim().toLowerCase();

let words = trimmedName.split(' ');
let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
let formattedTitle = capitalizedWords.join(' ');

let finalTitle = formattedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${finalTitle}`);
console.log(`Title length: ${finalTitle.length}`);