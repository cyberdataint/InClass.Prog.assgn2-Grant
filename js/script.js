// Function to toggle visibility of a specific photo
function togglePhoto(photoId) {
  const photo = document.getElementById(photoId);
  if (photo.style.display === "none" || photo.style.display === "") {
    photo.style.display = "block"; // Show the photo
  } else {
    photo.style.display = "none"; // Hide the photo
  }
}

// Event listeners for button clicks
document.getElementById("btnA").addEventListener("click", function () {
  togglePhoto("photoA");
});

document.getElementById("btnB").addEventListener("click", function () {
  togglePhoto("photoB");
});

document.getElementById("btnC").addEventListener("click", function () {
  togglePhoto("photoC");
});
