const button = document.getElementById("viewCamp");
button.addEventListener("click", function() {
    // Redirect to search Page.html when the button is clicked
    window.location.href = "./search.html";
});

function navigateToCampground() {
    window.location.href = "./ulap.html"; 
}
// // 
// // Add click event listeners to each "View Campground" button
// document.getElementById("but1").addEventListener("click", navigateToCampground);
// document.getElementById("but2").addEventListener("click", navigateToCampground);
// document.getElementById("but3").addEventListener("click", navigateToCampground);
// document.getElementById("but4").addEventListener("click", navigateToCampground);
// document.getElementById("but5").addEventListener("click", navigateToCampground);
// document.getElementById("but6").addEventListener("click", navigateToCampground);


// // (Get a reference to the HTML element where you want to render the data)
// const outputElement = document.getElementById("output");

// // (Map through the array and render it on the page)

// data.map(item => {
//     const itemElement = document.createElement("p");
//     itemElement.textContent = item;
//     outputElement.appendChild(itemElement);
// }


  function navigateToCampground() {
    // Get the input value from the search input field
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Define a mapping of campground names to their URLs
    const campgroundUrls = {
      'mount ulap': './ulap.html', 
      'calaguas island': 'calaguas.html',  
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
