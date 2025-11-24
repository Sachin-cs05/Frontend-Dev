// Create aliases for different jQuery versions
var $jq1 = jQuery.noConflict(true); // jQuery v1
var $jq2 = jQuery.noConflict(true); // jQuery v2

// Reassign $ to jQuery v1 for general use
var $ = $jq1;

$jq1(document).ready(function() {
    // 1. Version 1 → handles carousel slider rotation
    let currentSlide = 0;
    const totalSlides = $jq1('.carousel-slide').length;
    
    function showSlide(index) {
        $jq1('.carousel-slide').hide();
        $jq1('.carousel-slide').eq(index).show();
    }
    
    $jq1('#nextBtn').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
    
    $jq1('#prevBtn').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
    
    // 3. Version 1 → highlights active widget
    $jq1('.widget').click(function() {
        $jq1('.widget').removeClass('active-widget');
        $jq1(this).addClass('active-widget');
    });
    
    // Auto-rotate carousel every 3 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);
});

$jq2(document).ready(function() {
    // 2. Version 2 → manages modal popups for notifications
    $jq2('#openModal').click(function() {
        $jq2('#notificationModal').show();
    });
    
    $jq2('.close, .modal').click(function(event) {
        if (event.target === this) {
            $jq2('#notificationModal').hide();
        }
    });
    
    // 4. Version 2 → attaches tooltips on hover
    // Tooltips are handled with CSS, but we can add additional functionality with jQuery v2
    $jq2('.tooltip').hover(
        function() {
            // Optional: Add additional effects on hover
            $jq2(this).css('border-bottom', '1px solid #4CAF50');
        },
        function() {
            // Reset on hover out
            $jq2(this).css('border-bottom', '1px dotted black');
        }
    );
    
    // 5. Use jQuery.noConflict() → ensure both versions operate simultaneously
    // This is handled by the noConflict calls at the top of the file
});