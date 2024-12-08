
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;


    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


// Move to the next slide automatically
function autoSlide() {
    moveSlide(currentIndex + 1);
}

// Set a timer to change slides every 5 seconds (5000ms)
setInterval(autoSlide, 4000);

// FOR MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobileMenu");
    const toggleButton = document.getElementById("menu-toggle");
  
    // Toggle the menu visibility
    toggleButton.addEventListener("click", (e) => {
      menu.classList.toggle("active");
      e.stopPropagation(); // Prevent event from bubbling up
    });
  
    // Hide menu on click outside
    document.addEventListener("click", (e) => {
      if (menu.classList.contains("active") && !menu.contains(e.target) && e.target !== toggleButton) {
        menu.classList.remove("active");
      }
    });
  
    // Hide menu when the viewport changes
    window.addEventListener("resize", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });




// Carousel
let currentCaro = 0;

        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.carousel-dot');

        function updateCarousel() {
            items.forEach((item, index) => {
                item.style.transform = `translateX(-${currentCaro * 100}%)`;
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentCaro);
            });
        }

        function nextSlide() {
            currentCaro = (currentCaro + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            currentCaro = (currentCaro - 1 + items.length) % items.length;
            updateCarousel();
        }

        function setSlide(index) {
            currentCaro = index;
            updateCarousel();
        }

        // Auto-slide
        setInterval(nextSlide, 5000);



        // Function to show the login modal
    function showLogin() {
        document.getElementById('loginModal').style.display = 'flex';
    }

    // Function to hide the login modal
    function hideLogin() {
        document.getElementById('loginModal').style.display = 'none';
    }


    // Toggle dropdown
    // FOR MOBILE MENU
    function toggleMenu() {
        const dropdown = document.getElementById('dropdown-content');
        dropdown.classList.toggle('open');
    }

   

    //SCROLL TO THE TOP
    
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        // Show button after scrolling down 100px
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top when the button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        //DARK MODE
const themeToggle = document.getElementById("theme-toggle");
const stylesheet = document.getElementById("theme-stylesheet");

// Check and apply the saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});

// Toggle between light and dark themes
themeToggle.addEventListener("click", () => {
  const currentTheme = stylesheet.getAttribute("href").includes("light") ? "light" : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
});

// Function to apply the theme
function applyTheme(theme) {
  stylesheet.setAttribute("href", `${theme}/styles.css`);
  themeToggle.textContent = theme === "light" ? "🌙" : "🌞";
  localStorage.setItem("theme", theme); // Save user preference
}

        