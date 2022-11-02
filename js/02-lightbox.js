import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const containerEl = document.querySelector(".gallery");
const markupEl = createGallery(galleryItems);
containerEl.insertAdjacentHTML("beforeend", markupEl);
containerEl.addEventListener("click", onContainer);

function createGallery(images) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
  }).join("");
  
    
} function onContainer(e) {
     e.preventDefault();
    const isGalery = e.target.classList.contains("gallery");
    
    if (isGalery) {
        return;
    }

}

    let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250} );


