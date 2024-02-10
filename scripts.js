(function () {
  "use strict";

  // Function to remove elements by class name
  function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  // Run the ad and Shorts removal periodically in case of dynamic content loading
  setInterval(() => {
    // YouTube's ad elements' class names; might need updates
    removeElementsByClass("ytd-display-ad-renderer"); // Example class for ads, might not be accurate

    // Hypothetical class name for Shorts; replace with actual class name after inspecting the page
    removeElementsByClass("ytd-rich-grid-slim-media"); // Example class for Shorts, might not be accurate
  }, 1000);
})();
