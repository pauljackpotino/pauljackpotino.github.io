const topsterImages = document.querySelectorAll('.topster-image');

topsterImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        image.style.transform = 'scale(1.1)';
        image.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.5)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
    });
});
