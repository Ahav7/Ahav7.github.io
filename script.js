document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const texts = ["Software Developer", "Full Stack Developer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.text-animation span').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0
            setTimeout(() => {
                type();
            }, 2000); // Delay before typing the next job title
        } else {
            setTimeout(type, 100); // Typing speed
        }
    })();
});
