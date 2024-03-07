document.addEventListener("DOMContentLoaded", function() {
    // get the modal and the images and place on a variable
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalImg = document.getElementById("modalImg");
    const links = document.querySelectorAll('a');
    const images = document.querySelectorAll(".image");
    const closeButton = document.querySelector(".close-button");

    // Add listener for each image to open the Modal on click
    images.forEach(function(image) {
        image.addEventListener("click", function(event) {
            console.log(event.target) // Adding this in compliance with the requirements console log anchor tag
            const imgSrc = this.getAttribute("modal-src");
            modal.style.display = "block";
            modalImg.src = imgSrc;
        });
    });
    // Adding this in compliance with the requirements console log anchor tag
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            console.log(event.target)
        });
    });

    // Closing the Modal
    // close when X is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    // close when clicked outside the modal
    window.addEventListener("click", function(event) {
        if (event.target == modalOverlay) {
            modal.style.display = "none";
        }
    });
    // close when the esc key is pressed
    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});
