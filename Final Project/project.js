
// Function to scroll to the Work Experience section button

function scrollToWorkExperience() {
    const workExperienceSection = document.getElementById("work-experience");
    workExperienceSection.scrollIntoView({ behavior: "smooth" });
  }

// Function to scroll to the contact section button
function scrollToContact() {
    const workExperienceSection = document.getElementById("contactForm");
    workExperienceSection.scrollIntoView({ behavior: "smooth" });
  }
  
// Function for scrolling nav bar  
  let lastScrollY = window.scrollY;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.style.top = '-70px'; // Adjust to match your navbar's height
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  }); 

// Function to scroll with offset
// document.querySelectorAll('a.nav-link').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default anchor click behavior
//     const targetId = this.getAttribute('href').substring(1); // Get the target ID
//     const targetElement = document.getElementById(targetId); // Find the target element
//     const offset = 100; // Adjust this value for desired padding
//     const targetPosition = targetElement.offsetTop - offset;

//     // Scroll to the target position with smooth behavior
//     window.scrollTo({
//       top: targetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

// Function to fade-in sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const handleScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2;

      if (sectionTop < triggerPoint) {
        section.classList.add("visible");
      }
    });
  };

  // Run on scroll
  window.addEventListener("scroll", handleScroll);

  // Initial check
  handleScroll();
});

// Function to highlight section when clicked on Nav
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor click behavior

      const targetId = link.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      // Scroll to the section
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Add the highlight animation class
      targetSection.classList.add("section-hover");

      // Remove the animation class after it ends
      setTimeout(() => {
        targetSection.classList.remove("section-hover");
      }, 800); // Match the duration of the animation
    });
  });
});


// Function for form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  // Simulate form submission (e.g., send to a server or process locally)
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const message = document.getElementById('inputMessage').value;

  // Simulate a successful submission
  if (name && email && message) {
    // Display a response message
    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        Thank you, <strong>${name}</strong>! Your message has been sent successfully.
      </div>
    `;

    // Clear the form fields
    document.getElementById('contactForm').reset();
  } else {
    // Handle empty fields (optional, as the form fields are required)
    alert('Please fill out all fields before submitting.');
  }
});



