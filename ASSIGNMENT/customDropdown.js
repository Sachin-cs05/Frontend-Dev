document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownList = document.getElementById('dropdownList');
    const dropdownOptions = dropdownList.querySelectorAll('li');

        dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });

        dropdownOptions.forEach(option => {
        option.addEventListener('click', () => {
                        dropdownButton.textContent = option.textContent;
            
                        dropdownList.style.display = 'none';
        });
    });

        document.addEventListener('click', () => {
        dropdownList.style.display = 'none';
    }, true);

        function toggleDropdown() {
        const isVisible = dropdownList.style.display === 'block';
        dropdownList.style.display = isVisible ? 'none' : 'block';
    }
});