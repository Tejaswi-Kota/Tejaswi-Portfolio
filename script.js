// Portfolio welcome message

console.log("Welcome to Tejaswi's Portfolio!");


// Smooth project button interaction

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link will be added soon!");

        }

    });

});
