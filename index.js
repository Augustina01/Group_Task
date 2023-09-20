const button = document.getElementById("viewCamp");
button.addEventListener("click", function() {
    // Redirect to search Page.html when the button is clicked
    window.location.href = "./search.html";
});

function navigateToCampground() {
    window.location.href = "./ulap.html"; 
}


  function navigateToCampground() {
    // Get the input value from the search input field
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Define a mapping of campground names to their URLs
    const campgroundUrls = {
      'mount ulap': './ulap.html', 
      'calaguas island': 'cala.html',  
      'onay beach': 'onay.html',  
      'seven sisters waterfall': 'seven.html',  
      'latic riverside': 'latik.html',  
      'buloy springs': 'buloy.html' 
    };

    // Check if the search input matches a campground name
    if (campgroundUrls.hasOwnProperty(searchInput)) {
      const campgroundUrl = campgroundUrls[searchInput];
      window.location.href = campgroundUrl; // Redirect to the campground page
    } else {
      alert('Campground not found. Please try again.'); // Display an error message
    }
  }

  // Attach a click event listener to the "Search" button
  const searchButton = document.getElementById('searchButton');
  
  searchButton.addEventListener('click', navigateToCampground);
