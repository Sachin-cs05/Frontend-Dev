$(document).ready(function() {
    // 1. On page load → display a personalized greeting based on time of day
    function getTimeBasedGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning! Welcome to our website!";
        } else if (hour < 18) {
            return "Good Afternoon! Welcome to our website!";
        } else {
            return "Good Evening! Welcome to our website!";
        }
    }
    
    $('#greeting').text(getTimeBasedGreeting());
    
    // 2. Button "Change Greeting" → changes text to a motivational quote
    const motivationalQuotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Stay hungry, stay foolish. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ];
    
    $('#changeGreeting').click(function() {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        $('#greeting').text(randomQuote);
    });
    
    // 3. Toggle visibility of a welcome message using another button
    $('#toggleMessage').click(function() {
        $('#welcomeMessage').slideToggle();
    });
    
    // 4. Show an alert when greeting is clicked
    $('#greeting').click(function() {
        alert("You clicked on the greeting!");
    });
});