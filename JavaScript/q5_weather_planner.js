const temperature = 25;
const isRaining = false;
const windSpeed = 15;

let recommendation;

if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

console.log(`Weather Conditions:`);
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${recommendation}`);