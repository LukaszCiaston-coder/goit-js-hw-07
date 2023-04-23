import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item')
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image')
   

  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  galleryImage.addEventListener('click', e => {
    e.preventDefault();

     var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
      });
      
  });
    return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  gallery.appendChild(galleryItem);
});
console.log(galleryItems);
