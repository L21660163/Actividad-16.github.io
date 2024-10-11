// Reemplaza con tu Access Key de la API de Unsplash
const ACCESS_KEY = 'KschwVz-MvtebHu7k9opHC-laM3Z1Y3QEzO7v9S02_A';

// Elementos del DOM
const gallery = document.getElementById('gallery');
const loadImagesBtn = document.getElementById('load-images');

// Función para obtener tres imágenes aleatorias de Unsplash
async function fetchRandomImages() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=3`);
    const images = await response.json(); // El resultado será un array con 3 imágenes
    displayImages(images); // Pasamos el array de imágenes
}

// Función para mostrar las imágenes en la galería
function displayImages(images) {
    // Limpiar la galería antes de agregar nuevas imágenes
    gallery.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description || 'Imagen de Unsplash';
        gallery.appendChild(imgElement);
    });
}

// Agregar evento al botón para cargar nuevas imágenes
loadImagesBtn.addEventListener('click', fetchRandomImages);

// Cargar tres imágenes al cargar la página por primera vez
fetchRandomImages();
