document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const productInput = document.getElementById('productInput');
    const addButton = document.getElementById('addButton');

    addButton.addEventListener('click', () => {
        const productName = productInput.value.trim();
        if (productName) {
            addProduct(productName);
            productInput.value = '';
        }
    });

    productInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const productName = productInput.value.trim();
            if (productName) {
                addProduct(productName);
                productInput.value = '';
            }
        }
    });

    productList.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-btn')) {
            const listItem = e.target.closest('li');
            productList.removeChild(listItem);
        }

                if (e.target.classList.contains('edit-btn')) {
            const listItem = e.target.closest('li');
            const span = listItem.querySelector('span');
            const currentText = span.textContent;

                        const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.classList.add('edit-input');

                        span.replaceWith(input);
            input.focus();

                        input.addEventListener('blur', () => {
                saveEdit(span, input);
            });

                        input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveEdit(span, input);
                }
            });
        }
    });

        function addProduct(name) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = name;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        productList.appendChild(li);
    }

        function saveEdit(span, input) {
        const newText = input.value.trim() || input.placeholder;
        span.textContent = newText;
        input.replaceWith(span);
    }
});