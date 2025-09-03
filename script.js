document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heartBtn');
    const letterContainer = document.getElementById('letterContainer');
    const body = document.body;
    const initialText = document.getElementById('initialText');
    const nextBtn = document.getElementById('nextBtn');

    const whatsappLink = "https://wa.me/qr/FBO4NZU5ROVHM1";
    let state = 0;

    heart.addEventListener('click', () => {
        if (state === 0) {
            // Background berubah
            body.classList.add('bg-pink');
            initialText.style.opacity = '0';
            initialText.style.pointerEvents = 'none';

            // Tampilkan surat
            letterContainer.classList.remove('hidden');
            letterContainer.classList.add('show');
            letterContainer.setAttribute('aria-hidden', 'false');

            // Hilangkan love
            heart.classList.add('hidden');

            // Setelah sedikit delay, munculkan tombol baru
            setTimeout(() => {
                nextBtn.classList.add('visible');
            }, 800);

            state = 1;
        }
    });

    // Enter/Space juga bisa trigger
    heart.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            heart.click();
        }
    });

    // Klik tombol baru
    nextBtn.addEventListener('click', () => {
        window.open(whatsappLink, '_blank');
    });
});
