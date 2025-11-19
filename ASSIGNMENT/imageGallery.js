document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('imageGallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

        gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
                        modalImage.src = e.target.src;
            modalImage.alt = e.target.alt;
            
                        modal.style.display = 'block';
        }
    });

        closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

        modal.addEventListener('click', (e) => {
                if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

        document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});