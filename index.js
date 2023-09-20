const button = document.getElementById("viewCamp");
button.addEventListener("click", function() {
    // Redirect to search Page.html when the button is clicked
    window.location.href = "./search.html";
});

function navigateToCampground() {
    window.location.href = "./ulap.html"; 
}

// Add click event listeners to each "View Campground" button
document.getElementById("but1").addEventListener("click", navigateToCampground);
document.getElementById("but2").addEventListener("click", navigateToCampground);
document.getElementById("but3").addEventListener("click", navigateToCampground);
document.getElementById("but4").addEventListener("click", navigateToCampground);
document.getElementById("but5").addEventListener("click", navigateToCampground);
document.getElementById("but6").addEventListener("click", navigateToCampground);