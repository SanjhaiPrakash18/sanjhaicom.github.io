document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scroll event and change header and navigation link colors
    function handleScroll() {
        var header = document.querySelector("header");
        // Removed unused variable 'logo'
        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }

    // Add scroll event to call the handleScroll function
    window.addEventListener("scroll", handleScroll);

    // Function to handle GIF navigation change
    const gifs = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    function showGif(index) {
        gifs.forEach((gif, i) => {
            if (i === index) {
                gif.classList.add('active');
            } else {
                gif.classList.remove('active');
            }
        });
    }

    function showPreviousGif() {
        currentIndex = (currentIndex - 1 + gifs.length) % gifs.length;
        showGif(currentIndex);
    }

    function showNextGif() {
        currentIndex = (currentIndex + 1) % gifs.length;
        showGif(currentIndex);
    }

    // Add event listeners for GIF navigation buttons
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', showPreviousGif);
    nextButton.addEventListener('click', showNextGif);

    // Show the first GIF when the page loads
    showGif(currentIndex);


    // Add scroll event listener to adjust navigation link margin when the header is fixed
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var navLinks = document.querySelectorAll('header nav ul li');

        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
            // Adjust the margin of navigation links to accommodate for the fixed header
            navLinks.forEach(function (link) {
                link.style.marginRight = '15px'; // Adjust the value as needed
            });
        } else {
            header.classList.remove('fixed-header');
            // Reset the margin of navigation links when the header is not fixed
            navLinks.forEach(function (link) {
                link.style.marginRight = '10px'; // Reset to the original value
            });
        }
    });

    // Function to type search placeholder
    const placeholderElement = document.querySelector('.search-input');
    const placeholderText = "sanjhaiprakash18.github.io/SanjhaiPrakash/";
    let index = 0;
    let cursorVisible = true; // Flag to track cursor visibility

    function typeSearchPlaceholder() {
        if (index <= placeholderText.length) { // Modified condition to include the last character
            let cursor = (index < placeholderText.length) ? '' : (cursorVisible ? '|' : ''); // Toggle blinking cursor
            placeholderElement.setAttribute('placeholder', placeholderText.slice(0, index) + cursor);
            index++;
        } else {
            index = 0; // Reset index to start over the loop
            setTimeout(typeSearchPlaceholder, 5000); // Delay of 5 seconds before starting next loop
            cursorVisible = true; // Reset cursor visibility for the next loop
            return; // Exit function to prevent immediate recursion
        }
        cursorVisible = !cursorVisible; // Toggle cursor visibility
        placeholderElement.style.color = '#000000'; // Set text color to black
        setTimeout(typeSearchPlaceholder, 170); // Modified delay for smoother animation
    }

    typeSearchPlaceholder();

    document.addEventListener('DOMContentLoaded', function () {
        const experienceItems = document.querySelectorAll('.experience-item');

        experienceItems.forEach(item => {
            const description = item.dataset.description;
            const backContent = item.querySelector('.back p');
            backContent.textContent = description;
        });
    });

    // JavaScript
    document.addEventListener("DOMContentLoaded", function () {
        const dots = document.querySelectorAll(".dot");
        const line = document.querySelector(".vertical-line");
        const dotColor = "#77DD86"; // Dot color
        const outerLineColor = "#1bdf73"; // Outer line color
        const dotSize = "20px"; // New size for the enlarged dot
        const outerLineWidth = "1px"; // Increased outer line width

        // Calculate the positions of each dot
        const dotPositions = Array.from(dots).map(dot => dot.getBoundingClientRect().top + window.scrollY);

        let isFirstScroll = true; // Flag to track the first scroll

        function updateLinePosition() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const sensitivity = 0.8; // Adjust sensitivity here (0.8 means 80% of window height)

            dotPositions.forEach((dotPosition, index) => {
                const dotTop = dotPosition - windowHeight * sensitivity;
                const dotBottom = dotPosition + windowHeight * sensitivity;

                if (scrollPosition >= dotTop && scrollPosition <= dotBottom) {
                    const lineHeight = ((index + 1) / dots.length) * 100 + "%";

                    if (isFirstScroll && index === 0) {
                        line.style.height = "0";
                    } else {
                        line.style.height = lineHeight;
                        updateDotStyle(index);
                    }
                }
            });

            isFirstScroll = false; // Update flag after the first scroll
        }

        function updateDotStyle(dotIndex) {
            dots.forEach((dot, index) => {
                if (index === dotIndex) {
                    dot.classList.add("blink-animation"); // Add blink animation class
                    dot.style.width = dotSize; // Enlarge dot size
                    dot.style.height = dotSize; // Enlarge dot size
                    dot.style.backgroundColor = dotColor;
                    dot.style.boxShadow = `0 0 10px ${dotColor}`;
                    dot.style.border = `${outerLineWidth} solid ${outerLineColor}`; // Adjust outer line width and color
                    dot.style.borderRadius = "50%"; // Make sure it's a circle
                    const infoDiv = document.getElementById(`exp-info${dotIndex + 1}`);
                    if (infoDiv) {
                        infoDiv.style.display = "block";
                    }
                } else {
                    dot.classList.remove("blink-animation"); // Remove blink animation class
                    dot.style.width = ""; // Reset dot size
                    dot.style.height = ""; // Reset dot size
                    dot.style.backgroundColor = "#EFEFEF";
                    dot.style.boxShadow = "none";
                    dot.style.border = "none"; // Reset border
                    const infoDiv = document.getElementById(`exp-info${index + 1}`);
                    if (infoDiv) {
                        infoDiv.style.display = "none"; // Hide info rectangle for non-blinking dots
                    }
                }
            });
        }

        function handleScroll() {
            requestAnimationFrame(updateLinePosition);
        }

        window.addEventListener("scroll", handleScroll);
        updateLinePosition();
    });
});
// Call animateNotificationIcon where appropriate, e.g., when a new notification appears
// animateNotificationIcon();


// Function to simulate typing effect
function typeMessage(message, element, delay, callback) {
    let index = 0;
    element.textContent = ''; // Clear the text content before typing

    const interval = setInterval(function () {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Call the callback function after typing is done
        }
    }, delay);
}



const titles = [
    "Home",
    "Companies I Worked",
    "About Me",
    "Work Experience",
    "Areas Of Interests",
    "Portfolio",
    "Services",
    "Pricing",
    "Contact Me"
];

const images = [
    "Home Page Lat Player.png",
    "Companies Music Lat.png",
    "About Me Lat.png",
    "Exp Lat.png",
    "AOI Upd.png",
    "Portfolio Lat.png",
    "Service Lat.png",
    "Pricing Pic.png",
    "Contact Me Log.png"
];

// Function to update the music title and music image
function updateMusicTitle() {
    const musicTitle = document.querySelector('.music-title');
    const musicImage = document.querySelector('.music-image');
    let currentIndex = titles.indexOf(musicTitle.textContent);
    currentIndex = (currentIndex + 1) % titles.length;
    musicTitle.textContent = titles[currentIndex];
    musicImage.src = images[currentIndex];
}

// Function to change the music title and image every 2 seconds
function animateMusicTitle() {
    setInterval(updateMusicTitle, 1300);
}

// Start the animation
animateMusicTitle();


// JavaScript to trigger animation
document.addEventListener("DOMContentLoaded", function () {
    // Get all circles
    var circles = document.querySelectorAll(".circle");

    // Function to trigger animation on each circle
    function animateCircles() {
        circles.forEach(function (circle, index) {
            setTimeout(function () {
                circle.classList.add("active");
                // Find the arrow-down element within this circle
                var arrow = circle.querySelector(".arrow-down");
                if (arrow) {
                    // Delay the appearance of the arrow by 300 milliseconds
                    setTimeout(function () {
                        arrow.style.opacity = 1;
                        arrow.style.transform = "translateX(-50%) scale(1)";
                    }, 300); // Adjust timing as needed
                }
            }, index * 1000); // Adjust timing as needed
        });
    }

    // Trigger animation when page loads
    animateCircles();

    // Define interval for looping animation
    var interval = 5000; // Adjust interval duration as needed (in milliseconds)

    // Set up interval for looping animation
    setInterval(function () {
        // Reset animation by removing 'active' class from all circles
        circles.forEach(function (circle) {
            circle.classList.remove("active");
            // Reset arrow appearance
            var arrow = circle.querySelector(".arrow-down");
            if (arrow) {
                arrow.style.opacity = 0;
                arrow.style.transform = "translateX(-50%) scale(0)";
            }
        });

        // Trigger animation again after a short delay
        setTimeout(animateCircles, 500); // Adjust delay as needed
    }, interval);
});
/*document.addEventListener("DOMContentLoaded", function () {
    const dottedRectangles = document.querySelectorAll('.dotted-rectangle');
    const animationDuration = 0.5; // Duration of the animation in seconds

    function popUpNextRectangle(index) {
        // Show the current rectangle
        dottedRectangles[index].style.animation = `popUp ${animationDuration}s forwards`;

        // Hide the rectangle after animation completes
        setTimeout(function () {
            dottedRectangles[index].style.animation = 'none';
            // Call the function recursively to show the next rectangle
            const nextIndex = (index + 1) % dottedRectangles.length; // Wrap around to the beginning if reached the end
            setTimeout(function () {
                popUpNextRectangle(nextIndex);
            }, 500); // Delay before showing the next rectangle
        }, animationDuration * 6000); // Wait for the animation to complete before hiding
    }

    // Start the animation loop
    popUpNextRectangle(0);
});*/

function togglePopup(popupId, offset = -1140) {
    var popup = document.getElementById(popupId);
    var body = document.querySelector('body');
    if (popup.style.display === "flex") {
        popup.style.display = "none";
        body.classList.remove('popup-open');
    } else {
        popup.style.display = "flex";
        body.classList.add('popup-open');
        // Scroll to the about section with a slight offset
        var aboutSection = document.getElementById('about');
        var scrollPosition = aboutSection.offsetTop - offset;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to increment numbers from 0 to the target number
    function animateValue(id, start, end, duration, delay) {
        var obj = document.getElementById(id);
        var range = end - start;
        var increment = end > start ? 1 : -1;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var current = start + (progress / duration) * range;
            obj.textContent = Math.floor(current);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                // Reset start time and current value for looping
                startTime = null;
                current = start;
                setTimeout(function () {
                    window.requestAnimationFrame(step);
                }, delay);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Call the function for each number with desired end values
    animateValue("portfolio-stats-number", 0, 6, 1000, 5000); // Adjust duration and delay as needed
    animateValue("experience-stats-number", 0, 2, 1000, 5000);
    animateValue("service-stats-number", 0, 1, 1000, 5000);
    animateValue("customers-stats-number", 0, 10, 1000, 5000);
});





function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}



document.addEventListener("DOMContentLoaded", function () {
    var revealText = document.getElementById("reveal-text");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function revealIfVisible() {
        if (isElementInViewport(revealText)) {
            revealText.classList.add("visible");
            window.removeEventListener("scroll", revealIfVisible);
        }
    }

    window.addEventListener("scroll", revealIfVisible);
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.service-reveal');

    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Calculate the delay based on the index of the section
            const index = Array.from(sections).indexOf(section);
            const delay = index * 150; // Adjust the delay time as needed

            if (sectionTop < window.innerHeight && sectionBottom >= 0) {
                setTimeout(() => {
                    section.classList.add('active');
                    section.classList.add('revealed'); // Add revealed class when section is revealed
                }, delay);
            } else {
                // Check if the section has been revealed before removing the active class
                if (!section.classList.contains('revealed')) {
                    section.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', revealSection);
    revealSection(); // Call revealSection on page load
});

// JavaScript to handle scroll detection and update active filter
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.InterestSection');
    const filterOptions = document.querySelectorAll('.AOIFilterOption');

    function setActiveFilter(sectionId) {
        // Remove active class from all filter options
        filterOptions.forEach(option => option.classList.remove('active'));

        // Add active class to the corresponding filter option
        const activeOption = document.querySelector(`.AOIFilterOption[data-filter="${sectionId}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }
});


function togglePlay() {
    var video = document.getElementById('aboutMeVideo');
    var playButton = document.getElementById('playButton');
    var circleAnimation = document.querySelector('.VC-circle-animation');

    if (video.paused || video.ended) {
        video.play();
        playButton.style.display = 'none'; // Hide the play button when playing
        circleAnimation.style.display = 'none'; // Hide the circle animation when playing
    } else {
        video.pause();
        playButton.style.display = 'flex'; // Show the play button when paused
        circleAnimation.style.display = 'block'; // Show the circle animation when paused
    }
}
