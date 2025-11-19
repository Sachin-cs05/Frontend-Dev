document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('textInput');
    const counter = document.getElementById('charCounter');
    const resetButton = document.getElementById('resetButton');
    const maxChars = 100;

        textarea.addEventListener('input', updateCounter);

        resetButton.addEventListener('click', () => {
        textarea.value = '';
        updateCounter();
    });

        updateCounter();

    function updateCounter() {
        const currentLength = textarea.value.length;
        const remaining = maxChars - currentLength;

                counter.textContent = `${remaining} characters remaining`;

                if (remaining <= 0) {
            counter.style.color = 'red';
                        if (currentLength > maxChars) {
                textarea.value = textarea.value.substring(0, maxChars);
            }
        } else if (remaining <= 20) {
            counter.style.color = 'yellow';
        } else {
            counter.style.color = 'black';
        }

                if (currentLength >= maxChars) {
            textarea.addEventListener('keypress', preventTyping);
        } else {
            textarea.removeEventListener('keypress', preventTyping);
        }
    }

    function preventTyping(e) {
                if ([8, 46, 37, 38, 39, 40].includes(e.keyCode)) {
            return;
        }
                if (textarea.value.length >= maxChars) {
            e.preventDefault();
        }
    }
});