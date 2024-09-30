function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            return;
        }

        currentValue = Math.floor(Math.random() * 100) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue+"%";
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

// GSAP animations
gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
    onComplete: function () {
        document.querySelector(".counter").style.display = "none";
    }
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".h1", 1.5, {
    delay: 4,
    y: 700,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

// Show page after loading
gsap.to(".overlay", {
    delay: 4.5,
    opacity: 0,
    duration: 1,
    onComplete: function () {
        document.body.classList.add('enable-scroll');
        document.querySelector(".gradient-blue").style.display = "block";
        document.querySelector(".overlay").style.display = "none";
        document.documentElement.style.overflowY = 'auto';
    }
});



    // Anime.js for card flipping (same as before)
    var card1 = document.querySelector(".card1");
    var card2 = document.querySelector(".card2");
    var card3 = document.querySelector(".card3");

    var isFlipped1 = false;
    var isFlipped2 = false;
    var isFlipped3 = false;

    card1.addEventListener("mousemove", function() {
        if (!isFlipped1) {
            anime({
                targets: document.querySelector(".card1"),
                rotateY: "180deg",
                easing: 'easeInOutSine',
                duration: 250,
            });
            isFlipped1 = true;
        }
    });

    card1.addEventListener("mouseleave", function() {
        if (isFlipped1) {
            anime({
                targets: document.querySelector(".card1"),
                rotateY: "0deg",
                easing: 'easeInOutSine',
                duration: 400,
            });
            isFlipped1 = false;
        }
    });

    card2.addEventListener("mousemove", function() {
        if (!isFlipped2) {
            anime({
                targets: document.querySelector(".card2"),
                rotateY: "180deg",
                easing: 'easeInOutSine',
                duration: 250,
            });
            isFlipped2 = true;
        }
    });

    card2.addEventListener("mouseleave", function() {
        if (isFlipped2) {
            anime({
                targets: document.querySelector(".card2"),
                rotateY: "0deg",
                easing: 'easeInOutSine',
                duration: 400,
            });
            isFlipped2 = false;
        }
    });

    card3.addEventListener("mousemove", function() {
        if (!isFlipped3) {
            anime({
                targets: document.querySelector(".card3"),
                rotateY: "180deg",
                easing: 'easeInOutSine',
                duration: 250,
            });
            isFlipped3 = true;
        }
    });

    card3.addEventListener("mouseleave", function() {
        if (isFlipped3) {
            anime({
                targets: document.querySelector(".card3"),
                rotateY: "0deg",
                easing: 'easeInOutSine',
                duration: 400,
            });
            isFlipped3 = false;
        }
    });
