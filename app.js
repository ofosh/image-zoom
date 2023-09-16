const zoomIn = document.getElementById('zoomInBtn')
const zoomOut = document.getElementById('zoomOutBtn')
const image = document.querySelector("img");

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
