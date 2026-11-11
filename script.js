// Dark Mode Feature

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }

});


// Mobile Menu Feature

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});
/* Project Popup Function */

const viewBtn = document.getElementById("view-project");

const projectModal = document.getElementById("project-modal");

const closeBtn = document.getElementById("close-modal");

// Open Popup
viewBtn.addEventListener("click", function() {

    projectModal.classList.add("show");

});

// Close Popup
closeBtn.addEventListener("click", function() {

    projectModal.classList.remove("show");

});

// Close when clicking outside popup
projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {
        projectModal.classList.remove("show");
    }

});

// Close with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        projectModal.classList.remove("show");
    }

});