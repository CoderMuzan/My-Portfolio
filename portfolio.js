document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.querySelector("#typewriter-text");
    const phrases = [
        " Coder ",
        " Musician ",
        " Designer ",
        " Actor ",
        "Content Creator",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        const currentText = isDeleting
            ? currentPhrase.substring(0, charIndex--)
            : currentPhrase.substring(0, charIndex++);

        typewriterText.textContent = currentText;

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            delay = 70;
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 100;
            setTimeout(typeEffect, 500); // Pause before typing next phrase
        } else {
            setTimeout(typeEffect, delay);
        }
    }

    typeEffect();
});

function updateTime() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Africa/Lagos'
  };
  const formattedTime = now.toLocaleString('en-NG', options);
  document.getElementById("footer-time").textContent = ` ${formattedTime}`;
}
setInterval(updateTime, 1000);
updateTime(); 
