// script.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav');
    navLinks.classList.toggle('active'); // Toggle the active class
});
let currentlyZoomedImage = null; // Track the currently zoomed image

function zoomImage(event, img) {
    // Prevent the event from bubbling up to the document
    event.stopPropagation();

    // If there's an image already zoomed, remove the zoom class
    if (currentlyZoomedImage && currentlyZoomedImage !== img) {
        currentlyZoomedImage.classList.remove('zoom');
    }

    // Toggle the zoom class on the clicked image
    img.classList.toggle('zoom');

    // Update the currently zoomed image
    currentlyZoomedImage = img.classList.contains('zoom') ? img : null;
}

// Close zoom when clicking outside the image
document.addEventListener('click', function() {
    if (currentlyZoomedImage) {
        currentlyZoomedImage.classList.remove('zoom');
        currentlyZoomedImage = null; // Reset the currently zoomed image
    }
});