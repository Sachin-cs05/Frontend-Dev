$(document).ready(function() {
    // 1. Click a manager → highlight all direct reports
    $('.manager').click(function() {
        // Remove highlight from all employees
        $('.employee').removeClass('highlight');
        
        // Highlight all employees in the same department
        $(this).siblings('.employee').addClass('highlight');
    });
    
    // 2. Hover on an employee → show contact info using .next()
    $('.employee').hover(
        function() {
            $(this).find('.contact-info').slideDown();
        },
        function() {
            $(this).find('.contact-info').slideUp();
        }
    );
    
    // 3. Click on a department → change background of all members in that department using .children()
    $('.department-header').click(function() {
        const $members = $(this).siblings('.department-members');
        $members.slideToggle();
    });
    
    // 4. Select a random employee → highlight sibling employees
    $('#randomEmployee').click(function() {
        // Remove any existing highlights
        $('.employee').removeClass('highlight');
        
        // Get all employees
        const $employees = $('.employee');
        
        // Select a random employee
        const randomIndex = Math.floor(Math.random() * $employees.length);
        const $randomEmployee = $employees.eq(randomIndex);
        
        // Highlight the random employee
        $randomEmployee.addClass('highlight');
        
        // Highlight sibling employees (in the same department)
        $randomEmployee.siblings('.employee').addClass('highlight');
    });
    
    // 5. Collapse/expand team using .parent() and .find()
    $('.department-header').dblclick(function() {
        const $department = $(this).parent('.department');
        const $members = $department.find('.department-members');
        $members.slideToggle();
    });
});