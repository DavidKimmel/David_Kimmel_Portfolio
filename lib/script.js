// script.js
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = lightbox.querySelector('.close');

    document.querySelectorAll('.image-popup').forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
