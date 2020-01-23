const showExif = (img, infoElem) => {
  EXIF.getData(img, () => {
    infoElem.innerHTML = JSON.stringify(EXIF.getAllTags(img), null, "<br>")
  });
}

window.onload = () => {
  const captureFile = document.getElementById("capture_file");
  const captureExif = document.getElementById("capture_info");
  const uploadFile = document.getElementById("upload_file");
  const uploadExif = document.getElementById("upload_info");

  // exif-js読み込んでね
  captureFile.addEventListener("change", (e) => showExif(e.target.files[0], captureExif));
  uploadFile.addEventListener("change", (e) => showExif(e.target.files[0], uploadExif));
}
