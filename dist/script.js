document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.loading-letter');
    const bar = document.getElementById('loadingBar');
    const loadingContainer = document.getElementById('loadingContainer');

    let index = 0;

    function animate() {
      const currentLetter = letters[index];
      currentLetter.style.opacity = '1';
      currentLetter.style.animationName = 'jump';

      const barPosition = (index + 1) * (100 / letters.length);
      bar.style.width = `${barPosition}%`;

      setTimeout(() => {
        currentLetter.style.animationName = 'none';
        index = (index + 1) % letters.length;
        animate();
      }, 1050);
    }

    animate();

    window.addEventListener('load', function() {
      loadingContainer.style.display = 'none'; // Hide the loading animation when all content is loaded
    });
  });