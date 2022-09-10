import createGlobe from 'cobe'

// const globe = createGlobe(canvas, options);



// Drop down button functions
const donatebtn = document.getElementById("donatebtn");

// Execute a function when the user presses a key on the keyboard
donatebtn.addEventListener("onclick", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});