var images = [
    '../img/Home/baner1.jpg',
    '../img/Home/baner2.jpg',
    '../img/Home/baner3.jpg'
  ];
  
var currentImageIndex = 0;
var banner = document.getElementById('banner');

function changeImage() {
  banner.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Cambiar la imagen cada 3 segundos (3000 milisegundos)
setInterval(changeImage, 3000);
