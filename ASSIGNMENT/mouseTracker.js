document.addEventListener('DOMContentLoaded', () => {
    const trackingBox = document.getElementById('trackingBox');
    const coordinatesDisplay = document.getElementById('coordinates');

        trackingBox.addEventListener('mousemove', (e) => {
        const x = e.clientX - trackingBox.getBoundingClientRect().left;
        const y = e.clientY - trackingBox.getBoundingClientRect().top;
        
                coordinatesDisplay.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
    });

        trackingBox.addEventListener('dblclick', (e) => {
        const x = e.clientX - trackingBox.getBoundingClientRect().left;
        const y = e.clientY - trackingBox.getBoundingClientRect().top;
        
                const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.backgroundColor = 'red';
        dot.style.borderRadius = '50%';
        dot.style.left = `${x - 5}px`;
        dot.style.top = `${y - 5}px`;
        dot.style.pointerEvents = 'none';
        
                trackingBox.appendChild(dot);
    });

        document.addEventListener('click', (e) => {
        if (!trackingBox.contains(e.target)) {
                        const dots = trackingBox.querySelectorAll('div');
            dots.forEach(dot => dot.remove());
        }
    });
});