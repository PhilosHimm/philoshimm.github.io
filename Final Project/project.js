
// Function to highlight Job when navigated to
document.addEventListener("DOMContentLoaded", () => {
  // IDs of the job sections to highlight
  const jobSectionIds = ["salvation-army", "tmu-intramurals", "marigolds-onions", "best-buy"];

  // Function to add and remove highlight
  const highlightSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Add the highlight class
      section.classList.add("highlight");
      // Remove the highlight class after 1 second to allow the fade-out transition
      setTimeout(() => {
        section.classList.remove("highlight");
      }, 1500);
    }
  };

  // Detect navigation clicks to sections
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Extract the target ID from the link href
      const targetId = link.href.split("#")[1];
      if (jobSectionIds.includes(targetId)) {
        highlightSection(targetId);
      }
    });
  });

  // Automatically highlight on page load if there's a hash in the URL
  const hashId = window.location.hash.slice(1); // Get the ID from the URL hash
  if (jobSectionIds.includes(hashId)) {
    highlightSection(hashId);
  }
});


// Function to fade into different pages
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    // Get the target URL and check if it should open in a new tab
    const targetUrl = this.href;
    const isExternal = this.target === '_blank';

    if (isExternal) {
      // If the link is set to open in a new tab, skip the fade-out logic
      return;
    }

    // Check if the target URL is different from the current page's URL
    if (targetUrl.split('#')[0] !== window.location.href.split('#')[0]) {
      e.preventDefault(); // Prevent immediate navigation
      // Add the fade-out effect
      document.body.classList.add('page-fade-out');
      // Navigate to the new page after the fade-out finishes
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Match the CSS transition duration
    }
  });
});


// Function to smooth scroll for navbar-brand link
document.addEventListener("DOMContentLoaded", () => {
    const navbarBrand = document.querySelector('.navbar-brand');

    navbarBrand.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default behavior

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }); 

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



