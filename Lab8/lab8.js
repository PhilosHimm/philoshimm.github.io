// Function to handle form submission
function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        eventType: document.getElementById("eventType").value,
        style: Array.from(document.querySelectorAll('input[name="style"]:checked')).map(cb => cb.value),
        budget: document.querySelector('input[name="budget"]:checked').value,
        date: document.getElementById("date").value,
        details: document.getElementById("details").value
    };

    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted and data saved!");

    // Reset form fields after submission
    document.getElementById("contactForm").reset();
}

//Function to increase text size
let isLargeText = false;

function toggleTextSize() {
    const elements = document.querySelectorAll('p, h4, h5, h6, a, li');
    elements.forEach(el => {
        el.style.fontSize = isLargeText ? '1em' : '1.25em';
    });
    isLargeText = !isLargeText;
}

//Function to toggle color
let isAltColor = false;

function toggleColors() {
    const elements = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, li');
    elements.forEach(el => {
        if (isAltColor) {
            el.style.color = '';
            el.style.backgroundColor = '';
        } else {
            el.style.color = '#f5f5f5';
            el.style.backgroundColor = '#222';
        }
    });
    isAltColor = !isAltColor;
}