//smooth scrolling animation
document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    var navbarHeight = document.querySelector('.navbar').offsetHeight;

    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            var target = document.querySelector(this.getAttribute("href"));
            var targetPosition = target.offsetTop;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition - navbarHeight;
            var duration = 1000; // Adjust the duration as needed
            var start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                var timeElapsed = currentTime - start;
                var scrollAmount = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, scrollAmount);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Easing function for smooth scrolling animation
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    });
});

 //number counting animation
 function countAnimation() {
    var countingNumbers = document.querySelectorAll('.counting-number');
    var options = {
        threshold: 1,
        rootMargin: '0px 0px -100px 0px' // Adjust the rootMargin based on when you want the animation to start
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    countingNumbers.forEach(function(number) {
        observer.observe(number);
    });
}

function animateCounting(numberElement) {
    var startCount = 0;
    var targetCount = parseInt(numberElement.dataset.count);
    var duration = 2000; // Adjust the duration as needed
    var intervalTime = Math.abs(Math.floor(duration / targetCount));

    var countingInterval = setInterval(function() {
        if (startCount < targetCount) {
            startCount++;
            numberElement.textContent = startCount;
        } else {
            clearInterval(countingInterval);
        }
    }, intervalTime);
}

// Call the countAnimation function when the page is fully loaded
window.addEventListener('load', countAnimation);

AOS.init();

  // Scroll Reveal Animation
  ScrollReveal().reveal('.hero-image', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.about-section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.keunggulan-section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.product-section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});
ScrollReveal().reveal('.conversion-section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});



