$(document).ready(function() {
    let postCounter = 6; // Starting counter for new posts
    
    // 1. "Add New Post" → append a new post to the list
    $('#addPost').click(function() {
        const newPost = `
            <div class="blog-post">
                <div class="post-title">New Blog Post ${postCounter}</div>
                <div class="post-meta">Published on ${getCurrentDate()} by Admin</div>
                <div class="post-content">
                    <p>This is a newly added blog post. You can edit this content as needed.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="post-tags">
                    <span class="tag">New</span>
                    <span class="tag">Blog</span>
                </div>
            </div>
        `;
        
        $('.blog-posts-container').append(newPost);
        postCounter++;
    });
    
    // 2. "Prepend Featured Post" → add a post at the top
    $('#prependFeatured').click(function() {
        const featuredPost = `
            <div class="blog-post featured-post">
                <div class="post-title">🌟 Featured Post: Important Announcement ${postCounter}</div>
                <div class="post-meta">Published on ${getCurrentDate()} by Editor</div>
                <div class="post-content">
                    <p>This is a featured post that appears at the top of the blog feed. Featured posts are highlighted for special attention.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="post-tags">
                    <span class="tag">Featured</span>
                    <span class="tag">Announcement</span>
                </div>
            </div>
        `;
        
        $('.blog-posts-container').prepend(featuredPost);
        postCounter++;
        
        // Highlight posts with specific keywords dynamically
        highlightKeywords();
    });
    
    // 3. "Remove Last Post" → delete last element
    $('#removeLast').click(function() {
        if ($('.blog-post').length > 0) {
            $('.blog-post:last').remove();
        } else {
            alert('No more posts to remove!');
        }
    });
    
    // 4. Add tags to posts → use .before()/.after() for placement
    // This is demonstrated in the HTML structure and can be extended as needed
    
    // 5. Highlight posts with specific keywords dynamically
    function highlightKeywords() {
        const keywords = ['featured', 'important', 'announcement'];
        
        $('.blog-post').each(function() {
            const $post = $(this);
            const title = $post.find('.post-title').text().toLowerCase();
            const content = $post.find('.post-content').text().toLowerCase();
            
            // Check if any keyword is in the post
            const hasKeyword = keywords.some(keyword => 
                title.includes(keyword) || content.includes(keyword)
            );
            
            if (hasKeyword) {
                $post.addClass('highlight-keyword');
            }
        });
    }
    
    // Helper function to get current date in MM/DD/YYYY format
    function getCurrentDate() {
        const now = new Date();
        return `${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}`;
    }
    
    // Initial highlighting of keywords
    highlightKeywords();
});