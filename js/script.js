
function togglePhoto(photoId) {
  const photo = document.getElementById(photoId);
  if (photo.style.display === "none" || photo.style.display === "") {
    photo.style.display = "block"; 
  } else {
    photo.style.display = "none"; 
  }
}


document.getElementById("btnA").addEventListener("click", function () {
  togglePhoto("photoA");
});

document.getElementById("btnB").addEventListener("click", function () {
  togglePhoto("photoB");
});

document.getElementById("btnC").addEventListener("click", function () {
  togglePhoto("photoC");
});
