$(document).ready(function() {
    let totalCourses = $('.course').length;
    let visibleCourses = totalCourses;
    
    // Update results info display
    function updateResultsInfo() {
        if (visibleCourses === totalCourses) {
            $('#resultsInfo').text(`Showing all ${totalCourses} courses`);
        } else {
            $('#resultsInfo').text(`Showing ${visibleCourses} of ${totalCourses} courses`);
        }
    }
    
    // 1. Search input filters courses in real-time using .keyup()
    $('#searchInput').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        // Reset highlighting
        $('.highlight-text').each(function() {
            const text = $(this).text();
            $(this).replaceWith(text);
        });
        
        // Filter courses
        $('.course').each(function() {
            const $course = $(this);
            const title = $course.find('.course-title').text().toLowerCase();
            const description = $course.find('.course-description').text().toLowerCase();
            const category = $course.data('category').toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                $course.removeClass('hidden');
                
                // 2. Highlight matched text using .css()
                if (searchTerm) {
                    highlightText($course, searchTerm);
                }
            } else {
                $course.addClass('hidden');
            }
        });
        
        // Update visible courses count
        visibleCourses = $('.course:not(.hidden)').length;
        updateResultsInfo();
    });
    
    // Function to highlight matched text
    function highlightText($element, term) {
        $element.find('.course-title, .course-description').each(function() {
            const $this = $(this);
            const html = $this.html();
            const regex = new RegExp(`(${term})`, 'gi');
            const newHtml = html.replace(regex, '<span class="highlight-text">$1</span>');
            $this.html(newHtml);
        });
    }
    
    // 3. Toggle visibility of courses not matching search
    // This is handled in the keyup function above
    
    // 4. Show count of matched courses dynamically
    // This is handled in the updateResultsInfo function
    
    // 5. Clear search → reset list to show all courses
    $('#clearSearch').click(function() {
        $('#searchInput').val('');
        $('.course').removeClass('hidden');
        $('.highlight-text').each(function() {
            const text = $(this).text();
            $(this).replaceWith(text);
        });
        visibleCourses = totalCourses;
        updateResultsInfo();
    });
});