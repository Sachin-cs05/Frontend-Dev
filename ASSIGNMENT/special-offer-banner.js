$(document).ready(function() {
    let bannerIndex = 0;
    const totalBanners = $('.banner').length;
    
    // 1. "Hide" button → hide specific banners
    $('#hideBanners').click(function() {
        $('.banner').hide();
    });
    
    // 2. "Show" button → show hidden banners
    $('#showBanners').click(function() {
        $('.banner').show();
    });
    
    // 3. "Slide Up/Down" buttons → toggle banners
    $('#slideUpBanners').click(function() {
        $('.banner').slideUp();
    });
    
    $('#slideDownBanners').click(function() {
        $('.banner').slideDown();
    });
    
    // 4. "Fade In/Fade Out" → show/hide banners gradually
    $('#fadeInBanners').click(function() {
        $('.banner').fadeIn();
    });
    
    $('#fadeOutBanners').click(function() {
        $('.banner').fadeOut();
    });
    
    // 5. Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut()
    function rotateBanners() {
        // Fade out current banner
        $('.banner').eq(bannerIndex).fadeOut(1000, function() {
            // Move to next banner
            bannerIndex = (bannerIndex + 1) % totalBanners;
            
            // Fade in next banner
            $('.banner').eq(bannerIndex).fadeIn(1000);
        });
    }
    
    // Start automatic rotation
    setInterval(rotateBanners, 5000);
    
    // Initially hide all banners except the first one
    $('.banner:not(:first)').hide();
});