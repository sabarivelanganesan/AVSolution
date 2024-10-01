function formSubmission() {
    alert("Thank you for reaching out. Your details have been received by our team, and we will be in touch with you shortly")
}

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const fadeInElementsLeft = document.querySelectorAll('.card-left');
    const fadeInElementsRight = document.querySelectorAll('.card-image');

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('card-left')) {
                    entry.target.classList.add('fade-slide-left');
                } else if (entry.target.classList.contains('card-image')) {
                    entry.target.classList.add('fade-slide-right');
                }
            }
        });
    }, observerOptions);

    fadeInElementsLeft.forEach(element => {
        observer.observe(element);
    });

    fadeInElementsRight.forEach(element => {
        observer.observe(element);
    });
});

// document.getElementById('play-icon').addEventListener('click', function() {
//     const video = document.getElementById('my-video');
//     video.style.display = 'block';  // Show the video
//     video.play();  // Play the video
//     this.style.display = 'none';  // Hide the play icon
// });