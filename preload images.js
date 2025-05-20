document.addEventListener("DOMContentLoaded", function () {
   const images = document.querySelectorAll("img");

   images.forEach((img) => {
      // Check if the image is above the fold (within the visible part of the page)
      if (img.getBoundingClientRect().top < window.innerHeight) {
         const preloadLink = document.createElement("link");
         preloadLink.rel = "preload";
         preloadLink.href = img.src;
         preloadLink.as = "image";
         document.head.appendChild(preloadLink);
      }
   });
});
