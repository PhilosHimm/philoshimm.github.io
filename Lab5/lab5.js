/*
Test
console.log('Hello');
console.log('Hello world!');
window.alert('hello world!');
*/

// Function to get name and input onto page (replaces the word Guest)
function askName(){
    let userName = prompt("Please enter your name:");
    
    if (userName != null && userName.trim() !== "") // Checks for blank or no input
        document.getElementById("nameDisplay").textContent = userName;
}

// Function to toggle image size
img = document.getElementById("img1");

function toggleImageSize() {
    if (img.classList.contains('enlarged')) {
      // If the image is enlarged, return it to normal size
      img.style.transform = 'scale(1)';
      img.classList.remove('enlarged');
    } else {
      // If the image is normal size, enlarge it
      img.style.transform = 'scale(2)';
      img.classList.add('enlarged');
    }
  }

 // Function for onmouseover effect
 function handleMouseOver(element) {
    element.style.backgroundColor = '#ff6347';  // Tomato color
    element.style.color = '#ffffff';
    element.style.transform = 'scale(1.1)';  // Slight scale-up
    element.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
}

// Function for onmouseout effect
function handleMouseOut(element) {
    element.style.backgroundColor = '';
    element.style.color = '';
    element.style.transform = 'scale(1)';  // Reset to normal size
}