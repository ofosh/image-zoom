const zoomIn = document.getElementById('zoomInBtn')
const zoomOut = document.getElementById('zoomOutBtn')
const image = document.querySelector("img");
const imgCard = document.getElementById("img-card");

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button")
const customText = document.getElementById("custom-text")

const actionBtn = document.querySelector('.action-btn')

function zoomInBtn() {
  if(zoomIn && image) {
    if(image.height < 400) {
      image.style.width = `${image.width + 60}px`;
      image.style.height = `${image.height + 20}px`;
    }
    
  }
}

function zoomOutBtn() {
  if(zoomOut && image) {
    if(image.width > 79) {
      image.style.width = `${image.width - 60}px`;
      image.style.height = `${image.height - 20}px`;
    }
  }
  
}

realFileBtn.onchange = function() {
  imgCard.src = URL.createObjectURL(realFileBtn.files[0]);
  if(realFileBtn.value) {
    customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)
  }
}
