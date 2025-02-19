document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animateButton');
    const animatedElement = document.getElementById('animatedElement');
    let isAnimating = false;

    animateButton.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            animatedElement.style.animation = 'bounce 0.5s ease infinite';
            animateButton.textContent = 'Stop Animation';
        } else {
            isAnimating = false;
            animatedElement.style.animation = 'none';
            animateButton.textContent = 'Click for Animation!';
        }
    });
}); 