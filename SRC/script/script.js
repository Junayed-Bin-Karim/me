// Update your menu toggle code to this:
let menu = document.querySelector('#menu-icon-js');
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navtc = document.querySelector('#nav-tc-js');

// Use both click and touch events for better mobile support
menu.addEventListener('click', toggleMenu);
menu.addEventListener('touchstart', toggleMenu);

navtc.addEventListener('click', closeMenu);
navtc.addEventListener('touchstart', closeMenu);

function toggleMenu(e) {
    e.preventDefault(); // Prevent default behavior
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    navtc.classList.toggle("nav-touch-close-open");
}

function closeMenu(e) {
    e.preventDefault();
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('open');
    navtc.classList.remove("nav-touch-close-open");
    navtc.classList.remove("nav-tc-z");
    navtc.classList.remove("nav-LR-TC");
} 
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;

	document.getElementById("header").classList.add('scrolled');
	if (currentScrollPos === 0) {
		// console.log("Hello");
		document.getElementById("header").classList.remove('scrolled');
	}
	if (navtc.classList.contains('nav-touch-close-open')) {
		return;
	}
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}


const contactSection = document.querySelector('.contact-section');
const formSection = document.querySelector('.form-section');
const contactSubmitAfter = document.querySelector('.contact-submit-after');
const csaOK = document.querySelector('.csa-ok');


const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorDiv = document.querySelector('.error');
const emailErrorDiv = document.querySelector('.email-error');
const contactButton = document.querySelector('.contact-button');
const contactLoad = document.querySelector('.contact-load');
const submitText = document.querySelector('.submit-text');

if (csaOK) {
	csaOK.onclick = () => {
		contactSubmitAfter.classList.remove('show');
		formSection.classList.remove('hide');
		contactSection.classList.remove('csa-cs');
		contactForm.classList.remove('csa-cf');
		contactButton.classList.remove('loading');
		contactLoad.classList.remove('show');
		submitText.classList.remove('hide');
		// contactSubmitAfter.classList.add('hide');
	}
}

// Function to validate the form
function validateForm(event) {
	event.preventDefault(); // Prevent the form from submitting
	let isValid = true;
	emailIsValid = true;
	nameIsValid = true;
	messageIsValid = true;

	// Check if Name field is empty
	if (nameInput.value.trim() === '') {
		isValid = false;
		nameIsValid = false;
	}

	// Check if Email field is empty or not a valid email address
	if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
		isValid = false;
		if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
			emailIsValid = false;
		}
	}

	// Check if Message field is empty
	if (messageInput.value.trim() === '') {
		isValid = false;
		messageIsValid = false;
	}

	if (!isValid) {
		// Display the error message
		errorDiv.classList.add('error-show');
		emailErrorDiv.classList.remove('error-show');
		if (nameIsValid && messageIsValid && !emailIsValid) {
			errorDiv.classList.remove('error-show');
			emailErrorDiv.classList.add('error-show');
		}
	} else {
		// Form is valid, it can be sumbitted now
		emailErrorDiv.classList.remove('error-show');
		errorDiv.classList.remove('error-show');
		contactButton.classList.add('loading');
		contactLoad.classList.add('show');
		submitText.classList.add('hide');
		setTimeout(function () {
			sendMail();
		}, 2000);
	}
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Event listener for form submission
if (contactForm) {
	contactForm.addEventListener('submit', validateForm);
}
const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenBoxes = document.querySelectorAll('.recognition-box.hidden');

seeMoreBtn.addEventListener('click', () => {
    hiddenBoxes.forEach(box => {
        box.classList.remove('hidden');
    });
    seeMoreBtn.style.display = 'none'; // Hide button after clicking
});

// project 
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('viewAllBtn');
    const projectsContainer = document.querySelector('.projects-container');
    
    viewAllBtn.addEventListener('click', function() {
        projectsContainer.classList.add('projects-shown');
    });
});
/* JavaScript to add 'visible' class when scrolled into view */
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.projects-section').forEach(section => {
    projectObserver.observe(section);
});

/* Toggle hidden projects */
document.getElementById('viewAllBtn').addEventListener('click', function() {
    document.querySelector('.projects-section').classList.add('projects-shown');
    this.style.display = 'none';
});


// Intersection Observer for scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible');
		
		// For skills grid, we need to add visible class to the grid itself
		if (entry.target.classList.contains('skills-grid')) {
		  entry.target.classList.add('visible');
		}
	  }
	});
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('.featured-skills, .achievements, .blog-preview, .about-me, .projects-section, .skills-grid').forEach(section => {
	observer.observe(section);
  });
  
  // For achievements list items - observe the parent container
  const listObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible');
	  }
	});
  }, observerOptions);
  
  document.querySelectorAll('.achievements ul').forEach(list => {
	listObserver.observe(list);
  });


/* JavaScript to add 'visible' class when scrolled into view about me  */
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-me').forEach(section => {
    aboutObserver.observe(section);
});


//Numbers that tell my success story  start .........



// Counter Animation Function
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    let delay = 300; // Initial delay before first counter starts
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            // Add active class for animation
            card.classList.add('counting');
            
            const statNumber = card.querySelector('.stat-number');
            const target = +statNumber.getAttribute('data-target');
            const speed = +statNumber.getAttribute('data-speed') || 50;
            let count = 0;
            
            const updateCounter = () => {
                const increment = target / speed;
                count += increment;
                
                if (count < target) {
                    statNumber.textContent = Math.floor(count).toLocaleString();
                    setTimeout(updateCounter, 20);
                } else {
                    statNumber.textContent = target.toLocaleString();
                    card.classList.remove('counting');
                }
            };
            
            updateCounter();
            
            // Animate the progress bar
            const statBar = card.querySelector('.stat-bar');
            statBar.style.width = '100%';
            
        }, delay);
        
        delay += 500; // Increment delay for next card
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect (same as home page)
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle (same as home page)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navTouchClose = document.getElementById('nav-touch-close');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('open');
        navTouchClose.classList.toggle('nav-touch-close-open');
    });

    navTouchClose.addEventListener('click', function() {
        navbar.classList.remove('open');
        this.classList.remove('nav-touch-close-open');
    });

    // Start counter animation when stats section is in view
    const statsSection = document.querySelector('.stats-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        observer.observe(statsSection);
    }
});
// Enhanced counter animation with country focus
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    let delay = 300;
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('counting');
            
            const statNumber = card.querySelector('.stat-number');
            const target = +statNumber.getAttribute('data-target');
            const speed = +statNumber.getAttribute('data-speed') || 50;
            let count = 0;
            
            // Special effect for countries served
            const isCountriesCard = card.querySelector('.fa-globe-americas') !== null;
            if (isCountriesCard) {
                card.style.transform = 'scale(1.05)';
                card.querySelector('.stat-icon').style.color = '#4e54c8';
            }
            
            const updateCounter = () => {
                const increment = target / speed;
                count += increment;
                
                if (count < target) {
                    statNumber.textContent = Math.floor(count).toLocaleString();
                    setTimeout(updateCounter, 20);
                } else {
                    statNumber.textContent = target.toLocaleString();
                    card.classList.remove('counting');
                    
                    // Special completion effect for countries
                    if (isCountriesCard) {
                        const flags = card.querySelectorAll('.country-flags img');
                        flags.forEach((flag, i) => {
                            setTimeout(() => {
                                flag.style.transform = 'scale(1.3)';
                                setTimeout(() => {
                                    flag.style.transform = 'scale(1)';
                                }, 300);
                            }, i * 100);
                        });
                    }
                }
            };
            
            updateCounter();
            card.querySelector('.stat-bar').style.width = '100%';
            
        }, delay);
        
        delay += 500;
    });
}

//My Milestones Numbers that tell my success story  End ...........


// Scroll Animation Functionality
const scrollElements = document.querySelectorAll("[data-scroll]");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Initialize
window.addEventListener("load", () => {
    handleScrollAnimation();
    // Add slight delay to ensure all elements are properly loaded
    setTimeout(handleScrollAnimation, 300);
});

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// Add data-scroll attributes to your HTML elements
document.addEventListener("DOMContentLoaded", function() {
    const professionalSummary = document.querySelector("#professional-summary");
    const shortTermGoals = document.querySelector(".short-term-goals");
    const longTermGoals = document.querySelector(".long-term-goals");
    
    if (professionalSummary) professionalSummary.setAttribute("data-scroll", "fade-in");
    if (shortTermGoals) shortTermGoals.setAttribute("data-scroll", "fade-left");
    if (longTermGoals) longTermGoals.setAttribute("data-scroll", "fade-right");
    
    // Header scroll effect
    const header = document.getElementById("header");
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove("scrolled");
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains("nav-open")) {
            // Down
            header.classList.remove("scrolled");
        } else if (currentScroll < lastScroll) {
            // Up
            header.classList.add("scrolled");
        }
        
        lastScroll = currentScroll;
    });
});
 








document.addEventListener('DOMContentLoaded', function() {
    // Check if localStorage is available
    if (typeof(Storage) !== "undefined") {
        // Get the current count from localStorage or initialize it
        let count = localStorage.getItem('visitorCount');
        
        if (count === null) {
            // First visit - initialize with a random number between 1000-5000
            count = Math.floor(Math.random() * 4000) + 1000;
        } else {
            // Increment the count for returning visitors
            count = parseInt(count) + 1;
        }
        
        // Save the updated count
        localStorage.setItem('visitorCount', count);
        
        // Animate the counter
        animateCounter(count);
    } else {
        // localStorage not supported
        document.getElementById('visitorCount').textContent = "Many";
    }
});

function animateCounter(target) {
    const element = document.getElementById('visitorCount');
    const duration = 2000; // Animation duration in ms
    const start = 0;
    const increment = target / (duration / 16); // Roughly 60fps
    
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
            element.classList.add('animate');
            setTimeout(() => {
                element.classList.remove('animate');
            }, 500);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});











  document.addEventListener('DOMContentLoaded', function() {
    // First make sure title is immediately visible
    const title = document.querySelector('.section-title');
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'none';
    }
  
    // Then handle scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      const windowHeight = window.innerHeight;
      
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight * 0.85) {
          setTimeout(() => {
            element.classList.add('show');
          }, index * 150);
        }
      });
    };
  
    // Run once on load
    animateOnScroll();
    
    // Run on scroll with debounce
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(animateOnScroll, 50);
    });
  });





// Add this to your scroll animations
document.querySelectorAll('.experience-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });






  

// After adding the Email Js APi key in the script tag of the contact.html, uncomment this function section

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_97vki6r";
    const adminTemplateID = "template_8xlswnh"; // Admin message template_8xlswnh
    const autoReplyTemplateID = "template_oe492hm"; // User reply (replace with your ID)template_oe492hm

    // Send to Admin
    emailjs.send(serviceID, adminTemplateID, params, "GbMzrOTXH4XXan9dR");

    // Auto-reply to User
    emailjs.send(serviceID, autoReplyTemplateID, params, "GbMzrOTXH4XXan9dR")
        .then(() => {
            // Success UI
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";

            contactSubmitAfter.classList.add('show');
            formSection.classList.add('hide');
            contactSection.classList.add('csa-cs');
            contactForm.classList.add('csa-cf');
        })
        .catch((error) => {
            console.log("Error sending auto-reply:", error);
        });
}
















function showLanguage(lang) {
  if (lang === 'bn') {
    document.getElementById('bn-text').style.display = 'block';
    document.getElementById('en-text').style.display = 'none';
  } else if (lang === 'en') {
    document.getElementById('bn-text').style.display = 'none';
    document.getElementById('en-text').style.display = 'block';
  }
}







   