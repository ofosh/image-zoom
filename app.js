const zoomIn = document.getElementById('zoomInBtn')
const zoomOut = document.getElementById('zoomOutBtn')
const image = document.querySelector("img");
const imgCard = document.getElementById("img-card");

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button")
const customText = document.getElementById("custom-text")

function zoomInBtn() {
  if(zoomIn && image) {
    image.style.width = `${image.width + 20}px`;
    image.style.height = `${image.height + 20}px`;
  }
}

function zoomOutBtn() {
  if(zoomOut && image) {

    image.style.width = `${image.width - 20}px`;
    image.style.height = `${image.height - 20}px`;
  }
}

realFileBtn.onchange = function() {
  imgCard.src = URL.createObjectURL(realFileBtn.files[0]);
  if(realFileBtn.value) {
    customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)
  }
}