function toggleBio(bioId, gridId) {
    const bio = document.getElementById(bioId);
    const grid = document.getElementById(gridId);

    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        grid.style.display = "grid"; // Show the grid when bio is displayed
    } else {
        bio.style.display = "none";
        grid.style.display = "none"; // Hide the grid when bio is hidden
    }
}
