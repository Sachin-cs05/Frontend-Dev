const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Dataset cannot be empty");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.data.reduce((sum, user) => sum + user.calories, 0);
        return totalCalories / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user => 
            `${user.user}: ${user.steps} steps, ${user.calories} calories burned`);
    }
}

try {
    const analytics = new FitnessAnalytics(workoutData);
    
    console.log("Active Users (steps > 7000):");
    console.log(analytics.getActiveUsers());
    
    console.log("\nAverage Calories Burned:");
    console.log(analytics.getAverageCalories().toFixed(2));
    
    console.log("\nUser Summary:");
    console.log(analytics.getUserSummary());
} catch (error) {
    console.error(`Analytics Error: ${error.message}`);
}

try {
    const emptyAnalytics = new FitnessAnalytics([]);
} catch (error) {
    console.error(`Analytics Error: ${error.message}`);
}