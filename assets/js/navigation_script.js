// Array of the six middle pages in random order
var pages = [
  "01-the-way-is-dark-the-night-is-long.html",
  "02-hearts-a-beatin-rhythm.html",
  "03-my-soul-is-singin-the-blues.html",
  "04-waitin-at-the-end-of-the-road.html",
  "05-angels-of-the-back-street-bars.html",
  "06-valley-of-tears.html"
];

// Shuffle the array
for (var i = pages.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = pages[i];
  pages[i] = pages[j];
  pages[j] = temp;
}

if (!sessionStorage.getItem("visitedPages")) {
  sessionStorage.setItem("visitedPages", JSON.stringify(pages));
}

// Find the index of the current page in the shuffled pages array
var visitedPages = JSON.parse(sessionStorage.getItem("visitedPages"));
var pageIndex = visitedPages.indexOf(window.location.pathname);

// Modify the CONTINUE button to load the next available page
var continueButton = document.querySelector(".button-style");
if (pageIndex < visitedPages.length - 1) {
  continueButton.setAttribute("href", visitedPages[pageIndex + 1]);
} else {
  continueButton.setAttribute("href", "07-emotionally-intelligent-artifice-A.html");
}

// Remove the next page from the shuffled pages array
visitedPages.splice(pageIndex + 1, 1);

// Update the visited pages in session storage
sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
