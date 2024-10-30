function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }

/* I forgot what this was for, but it looks like it's for my grid image block -Logan */
}
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    const grid = document.getElementById('grid-container'); // Get the grid element

    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        grid.style.display = "grid"; // Show the grid when bio is displayed
    } else {
        bio.style.display = "none";
        grid.style.display = "none"; // Hide the grid when bio is hidden
    }
}