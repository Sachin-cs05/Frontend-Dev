$(document).ready(function() {
    // 1. Click on a question → toggle answer visibility
    $('.faq-question').click(function() {
        $(this).siblings('.faq-answer').slideToggle();
        $(this).toggleClass('active');
    });
    
    // 2. Hover → change question color
    $('.faq-question').hover(
        function() {
            $(this).css('background-color', '#e9e9e9');
        },
        function() {
            if (!$(this).hasClass('active')) {
                $(this).css('background-color', '#f5f5f5');
            }
        }
    );
    
    // 3. Double-click question → collapse all answers
    $('.faq-question').dblclick(function() {
        $('.faq-answer').slideUp();
        $('.faq-question').removeClass('active');
        $('.faq-question').css('background-color', '#f5f5f5');
    });
    
    // 4. Focus on answer input (if any) → highlight parent question
    $('.faq-input').focus(function() {
        $(this).closest('.faq-item').find('.faq-question').css({
            'background-color': '#b3d9ff',
            'color': '#003366'
        });
    });
    
    // 5. Blur from input → reset background color
    $('.faq-input').blur(function() {
        const $question = $(this).closest('.faq-item').find('.faq-question');
        if ($question.hasClass('active')) {
            $question.css({
                'background-color': '#d0e1ff',
                'color': ''
            });
        } else {
            $question.css({
                'background-color': '#f5f5f5',
                'color': ''
            });
        }
    });
});