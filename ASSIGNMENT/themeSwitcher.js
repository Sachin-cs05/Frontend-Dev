document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

        const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

        themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            applyTheme(theme);
                        localStorage.setItem('theme', theme);
        });
    });

        function applyTheme(theme) {
                body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        
                body.classList.add(`${theme}-theme`);
        
                body.setAttribute('data-theme', theme);
        
                themeButtons.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});