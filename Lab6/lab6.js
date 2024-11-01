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
