let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");
let index = 0;

/* OPEN LIGHTBOX */
images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

/* NEXT / PREV */
function changeImage(step) {
  index = (index + step + images.length) % images.length;
  lightboxImg.src = images[index].src;
}

/* CLOSE LIGHTBOX */
function closeLightbox() {
  lightbox.style.display = "none";
}

/* FILTER IMAGES */
function filterImages(category) {
  images.forEach(img => {
    img.style.display =
      category === "all" || img.classList.contains(category)
      ? "block"
      : "none";
  });
}
