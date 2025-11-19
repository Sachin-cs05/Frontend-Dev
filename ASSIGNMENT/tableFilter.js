document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const studentTable = document.getElementById('studentTable');
    const tableBody = studentTable.querySelector('tbody');
    const noResults = document.getElementById('noResults');

        const originalRows = Array.from(tableBody.querySelectorAll('tr'));

        searchInput.addEventListener('input', filterTable);

        function filterTable() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
                tableBody.innerHTML = '';
        
                const filteredRows = originalRows.filter(row => {
            const cells = row.querySelectorAll('td');
            return Array.from(cells).some(cell => 
                cell.textContent.toLowerCase().includes(searchTerm)
            );
        });
        
                if (filteredRows.length > 0) {
            filteredRows.forEach(row => tableBody.appendChild(row.cloneNode(true)));
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'table-row';
            const noResultsRow = document.createElement('tr');
            noResultsRow.id = 'noResults';
            const noResultsCell = document.createElement('td');
            noResultsCell.colSpan = 3;
            noResultsCell.textContent = 'No results found';
            noResultsCell.style.textAlign = 'center';
            noResultsRow.appendChild(noResultsCell);
            tableBody.appendChild(noResultsRow);
        }
    }
});