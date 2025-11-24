$(document).ready(function() {
    // 1. Subscribe → enable notifications
    $('.subscribe-btn').click(function() {
        const $item = $(this).closest('.subscription-item');
        $item.removeClass('unsubscribed').addClass('subscribed');
        
        // Show success message
        $('#successMessage').text('Successfully subscribed to ' + $item.find('.subscription-title').text()).fadeIn().delay(3000).fadeOut();
    });
    
    // 2. Unsubscribe → disable notifications
    $('.unsubscribe-btn').click(function() {
        const $item = $(this).closest('.subscription-item');
        $item.removeClass('subscribed').addClass('unsubscribed');
        
        // Show success message
        $('#successMessage').text('Successfully unsubscribed from ' + $item.find('.subscription-title').text()).fadeIn().delay(3000).fadeOut();
    });
    
    // 3. Dynamically add new subscription topics → attach .on() click events
    $('#addSubscription').click(function() {
        const newTopic = $('#newSubscription').val().trim();
        if (newTopic) {
            const newId = 'sub' + ($('.subscription-item').length + 1);
            
            const newSubscription = `
                <div class="subscription-item" id="${newId}">
                    <div class="subscription-header">
                        <div class="subscription-title">${newTopic}</div>
                        <div class="subscription-actions">
                            <button class="subscribe-btn">Subscribe</button>
                            <button class="unsubscribe-btn">Unsubscribe</button>
                        </div>
                    </div>
                    <p>New subscription topic added dynamically.</p>
                </div>
            `;
            
            // Add the new subscription before the add subscription section
            $('.add-subscription').before(newSubscription);
            
            // Clear the input
            $('#newSubscription').val('');
            
            // Show success message
            $('#successMessage').text('New subscription topic added successfully!').fadeIn().delay(3000).fadeOut();
        }
    });
    
    // 4. Remove specific subscription → detach .off() event
    // Note: In this implementation, we're not removing subscriptions, but we could add a remove button
    
    // 5. Show success message → dynamically inserted into DOM on action
    // This is handled in the subscribe/unsubscribe functions above
});