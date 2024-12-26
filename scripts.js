/**
 * Toggles the display of the FAQ content and rotates the associated arrow icon.
 * faqNum - The number of the FAQ to show or hide.
 */
function showFAQ(faqNum) {}
const sideBar = document.getElementById("side-bar");
const body = document.querySelector("body");
const mainContainer = document.getElementsByClassName("container");
const header = document.querySelector("header");
const loginFormContainer = document.getElementById("login-form-container");
const loginForm = document.getElementById("login-form");
const backgroundImage = document.getElementById("background-image");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const loginText = document.getElementById("login-text");
const loader = document.querySelector(".loader");
const loadProgress = document.getElementById("load-progress");
var i = 0;
var timeInterval = 1000;

let progress = 0;
/**
 * Increases the progress bar and updates the loading text until it reaches 100%.
 * Hides the loader once loading is complete.
 */
function loadPage() {
  // loader.style.display = "none";
  console.log(`progress: ${progress}`);
  if (progress < 100) {
    // Increase progress by 20%
    progress += 20;
    // Update the loading text
    loadProgress.textContent = `Loading Page: ${progress}%`;
    // Update the progress bar
    progressBar.style.width = progress + "%";
    // Call this function again after a delay of 1000ms
    setTimeout(loadPage, 1000);
    console.log(`Progress: ${progress}`);
  } else {
    // Hide the loader once loading is complete
    loader.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", loadPage(), false);

/**
 * Submits the login form and displays a success message if the form is valid.
 */
function submitForm() {
  // Submit the form and display a success message
  alert("Login Successful");
}

/**
 * Changes the background image in a slideshow manner every specified interval.
 *
 * timeInterval - The interval in milliseconds between changes to the background image.
 */
function slideShow() {
  // Set the source attribute of the background image to the current image in the sequence.
  backgroundImage.src = `background-${i + 1}.png`;

  // Increment the image index, wrapping around to 0 if the index exceeds the number of images.
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }

  // Schedule the slideshow to run again after the specified interval.
  setTimeout(slideShow, timeInterval);
}
window.onload = slideShow;

/**
 * Displays the login form container if it is currently hidden,
 * by setting its display style to "block" and adjusting its z-index to 100.
 * Logs the current display style of the login form container.
 */

function login() {
  console.log(loginFormContainer.style.display);
  if (
    loginFormContainer.style.display === "" ||
    loginFormContainer.style.display === "none"
  ) {
    loginFormContainer.style.display = "block";
    loginFormContainer.style.zIndex = "100";
  }
}
/**
 * Hides the login form container if it is currently displayed.
 */
function closeForm() {
  if (loginFormContainer.style.display === "block") {
    loginFormContainer.style.display = "none";
  }
}

/**
 * Toggles the visibility of the sidebar and adjusts the layout of the main content accordingly.
 *
 * When the sidebar is visible, the main content is pushed to the right and the sidebar is displayed as a column.
 * When the sidebar is hidden, the main content is full width and the sidebar is hidden.
 */
function openSideBar() {
  const body = document.querySelector("body");
  const mainContainer = document.getElementsByClassName("container");
  const header = document.querySelector("header");

  // Setting the sidebar to display or not
  if (sideBar.style.display === "flex") {
    sideBar.style.display = "none";
    header.style.visibility = "visible";
    body.style.gridTemplateColumns = "auto";
    mainContainer.style.display = "flex";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
  } else {
    sideBar.style.display = "flex";
    body.style.gridTemplateColumns = "minmax(320px, 20vw) auto";
    sideBar.style.backgroundColor = "#dcdcdc";
    sideBar.style.height = "100vh";
    sideBar.style.position = "sticky";
    sideBar.style.flexDirection = "column";
    sideBar.style.justifyContent = "center";
    sideBar.style.alignItems = "center";
    sideBar.style.rowGap = "100px";
  }
}

// Setting the sidebar display to none
sideBar.style.display = "none";
//
// To show the FAQ content
function showFAQ(faqNum) {
  const content = document.getElementById(`faq-${faqNum}`);
  const arrow = document.getElementById(`arrow-${faqNum}`);
  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  }
}
