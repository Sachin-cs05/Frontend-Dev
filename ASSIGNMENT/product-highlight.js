$(document).ready(function() {
    // 1. Click on a product → highlight background
    $('.product').click(function() {
        $(this).toggleClass('highlighted');
    });
    
    // 2. Hover over a product → show additional product details
    $('.product').hover(
        function() {
            $(this).find('.product-details').slideDown();
        },
        function() {
            $(this).find('.product-details').slideUp();
        }
    );
    
    // 3. Clicking a "Favorite" icon → toggles a "selected" class
    $('.favorite-icon').click(function(e) {
        e.stopPropagation(); // Prevent triggering the product click event
        $(this).toggleClass('selected');
        $(this).closest('.product').toggleClass('selected');
    });
    
    // 4. Apply different styles to products with discounts using attribute selector
    // This is handled in CSS with .product[data-discount]
    
    // 5. Show an alert if a product is out of stock (using data attribute)
    $('.product').click(function() {
        const stockStatus = $(this).data('stock');
        if (stockStatus === 'out') {
            alert('This product is currently out of stock!');
        }
    });
});